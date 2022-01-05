import { Context, Joi } from "./Joi";

type Validate = (value: any, context?: any) => boolean;
type Required = () => DateJoi;

interface DateFormatting {
  required?: boolean;
}

export class DateJoi extends Joi {
  private schema: DateFormatting = {};
  private value: Date | undefined;

  constructor(date?: DateJoi) {
    super();
    if (date != undefined) this.schema = date.schema;
  }

  public clone = () => {
    return new DateJoi(this);
  };

  public addSchema = <keyType extends keyof DateFormatting>(
    key: keyType,
    value: DateFormatting[keyType]
  ) => {
    this.schema[key] = value;
    return this;
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

    if (!this.checkRequired()) {
      this.setError({ type: "required", joi: "date" });
      return false;
    }
    if (value === undefined) {
      this.setError();
      return true;
    }
    if (!(value instanceof Date) || isNaN(value.getTime())) {
      this.setError({ type: "wrong", joi: "date" });
      return false;
    }
    this.setError();
    return true;
  };
}
