import { Joi } from "./Joi";
type Validate = (value: any, context?: any) => boolean;
type Required = () => AnyJoi;
type Valid = (value: any) => AnyJoi;
type ObjectId = () => AnyJoi;
interface AnyFormatting {
  required?: boolean;
  valid?: any;
  objectId?: boolean;
}

const objIdPattern = /^[0-9a-fA-F]{24}$/;

export class AnyJoi extends Joi {
  private schema: AnyFormatting = {};
  private value: any | undefined;

  public constructor(bool?: AnyJoi) {
    super();
    if (bool !== undefined) {
      this.schema = { ...bool.schema };
      this.schema = bool.schema;
    }
  }

  public addSchema = <keyType extends keyof AnyFormatting>(
    key: keyType,
    value: AnyFormatting[keyType]
  ) => {
    this.schema[key] = value;
    return this;
  };

  public clone = () => {
    return new AnyJoi(this);
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

  public objectId: ObjectId = () => {
    return this.addSchema("objectId", true);
  };

  private checkObjectId = () => {
    if (this.schema.objectId === undefined) return true;
    return (
      Boolean(this.value) &&
      !Array.isArray(this.value) &&
      objIdPattern.test(String(this.value))
    );
  };

  private checkRequired = () => {
    if (!this.schema.required) return true;
    return this.value !== null && this.value !== undefined;
  };

  public validate: Validate = (value, context) => {
    this.setContext(value, context);
    this.value = value;
    if (!this.checkValid()) {
      this.setError({ type: "valid", joi: "any" });
      return false;
    }
    if (!this.checkRequired()) {
      this.setError({ type: "required", joi: "any" });
      return false;
    }
    if (!this.checkObjectId()) {
      this.setError({ type: "wrong", joi: "any" });
    }
    if (value === undefined) {
      this.setError();
      return true;
    }
    this.setError();
    return true;
  };
}
