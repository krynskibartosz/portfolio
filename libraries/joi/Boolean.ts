import { Joi } from "./Joi";
type Validate = (value: any, context?: any) => boolean;
type Required = () => BooleanJoi;
type Valid = (value: boolean) => BooleanJoi;

interface BooleanFormatting {
  required?: boolean;
  valid?: boolean;
}

export class BooleanJoi extends Joi {
  private schema: BooleanFormatting = {};
  private value: boolean | undefined;

  public constructor(bool?: BooleanJoi) {
    super();
    if (bool !== undefined) {
      this.schema = { ...bool.schema };
      this.schema = bool.schema;
    }
  }

  public addSchema = <keyType extends keyof BooleanFormatting>(
    key: keyType,
    value: BooleanFormatting[keyType]
  ) => {
    this.schema[key] = value;
    return this;
  };

  public clone = () => {
    return new BooleanJoi(this);
  };

  public valid: Valid = (value) => {
    return this.addSchema("valid", value);
  };

  private checkValid = () => {
    if (this.schema.valid === undefined) return true;
    return this.schema.valid === this.value;
  };

  public required: Required = () => {
    return this.addSchema("required", true);
  };

  private checkRequired = () => {
    if (!this.schema.required) return true;
    return this.value !== null && this.value !== undefined;
  };

  public validate: Validate = (value, ctx) => {
    this.setContext(value, ctx);
    if (!this.checkValid()) {
      this.setError({ type: "valid", joi: "boolean" });
      return false;
    }
    if (!this.checkRequired()) {
      this.setError({ type: "required", joi: "boolean" });
      return false;
    }
    if (value === undefined) {
      this.setError();
      return true;
    }
    if (typeof value !== "boolean") {
      this.setError({ type: "wrong", joi: "boolean" });
      return false;
    }
    this.setError();
    return true;
  };
}
