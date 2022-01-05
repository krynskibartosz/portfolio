import { Joi as JoiType } from ".";
import { Joi, Context, ErrorType } from "./Joi";

type AllowType = any[];
type Allow = (...value: AllowType) => JoiType;

type Validate = (value: any, context?: Context) => boolean;

type Required = () => ObjectJoi;

interface ObjectFormatting {
  required?: boolean;
  allow?: AllowType;
}

export class ObjectJoi extends Joi {
  private objectSchema: Record<string, JoiType>;
  private schema: ObjectFormatting = {};
  private value: Record<string, any> = {};

  public constructor(
    objectSchema: Record<string, JoiType>,
    schema?: ObjectFormatting
  ) {
    super();
    this.objectSchema = objectSchema;
    if (schema !== undefined) this.schema = schema;
  }

  public clone = () => {
    const schemaCopy: Record<string, JoiType> = Object.entries(
      this.objectSchema
    ).reduce(
      (acc: any, [key, s]: [string, JoiType]) => ({ ...acc, [key]: s.clone() }),
      {}
    );
    return new ObjectJoi(schemaCopy, this.schema);
  };

  public addSchema = <keyType extends keyof ObjectFormatting>(
    key: keyType,
    value: ObjectFormatting[keyType]
  ) => {
    this.schema[key] = value;
    return this;
  };

  public allow: Allow = (...value: any[]) => {
    return this.addSchema("allow", value);
  };

  private checkAllow = () => {
    return this.schema.allow?.includes(this.value);
  };

  public required: Required = () => {
    return this.addSchema("required", true);
  };

  private checkRequired = () => {
    if (!this.schema.required) return true;
    return this.value !== undefined && this.value !== null;
  };

  protected setError = (error?: ErrorType) => {
    this.error = error;
  };

  public getError = () => {
    return Object.entries(this.objectSchema).reduce(
      (acc, [key, schema]: [string, any]) => ({
        ...acc,
        [key]: schema.getError(),
      }),
      {}
    );
  };

  public validate: Validate = (value, ctx) => {
    const newCtx = this.setContext(value, ctx);

    this.value = value;

    if (this.checkAllow()) return true;

    if (!this.checkRequired()) {
      this.setError({ type: "required", joi: "object" });
      return false;
    }

    if (value === undefined) return true;

    if (
      Object.keys(value).map((k: string) => {
        if (!Object.keys(this.objectSchema).includes(k))
          this.setError({ type: "allowed", joi: "object" });
      })
    )
      if (
        Object.entries(this.objectSchema)
          .map(([key, schema]) => {
            return schema.validate(value[key], {
              ctx: newCtx.ctx,
              path: [...newCtx.path, key],
            });
          })
          .includes(false)
      )
        return false;
    this.setError();
    return true;
  };
}
