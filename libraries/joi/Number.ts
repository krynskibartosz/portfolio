import { Context, Joi } from "./Joi";

type Validate = (value: any, context?: any) => boolean;
type ValidType = (number | ((ctx: Context) => any))[];
type Valid = (...value: ValidType) => NumberJoi;
type Required = () => NumberJoi;
type Integer = () => NumberJoi;
type Positive = () => NumberJoi;
type Negative = () => NumberJoi;
type Min = (value: number) => NumberJoi;
type Max = (value: number) => NumberJoi;

interface NumberFormatting {
  valid?: ValidType;
  required?: boolean;
  integer?: boolean;
  positive?: boolean;
  negative?: boolean;
  min?: number;
  max?: number;
}

export class NumberJoi extends Joi {
  private schema: NumberFormatting = {};
  private value: number | undefined;

  constructor(number?: NumberJoi) {
    super();
    if (number != undefined) this.schema = number.schema;
  }

  public clone = () => {
    return new NumberJoi(this);
  };

  public addSchema = <keyType extends keyof NumberFormatting>(
    key: keyType,
    value: NumberFormatting[keyType]
  ) => {
    this.schema[key] = value;
    return this;
  };

  public valid: Valid = (...values) => {
    return this.addSchema("valid", values);
  };

  private checkValid = () => {
    if (this.schema.valid === undefined) return true;
    return this.schema.valid
      .map((v) => {
        if (typeof v === "function" && this.ctx) {
          return v(this.ctx) === this.value;
        } else {
          return v === this.value;
        }
      })
      .includes(true);
  };

  public integer: Integer = () => {
    return this.addSchema("integer", true);
  };

  public checkInteger = () => {
    if (!this.schema.integer) return true;
    return Number.isInteger(this.value);
  };

  public required: Required = () => {
    return this.addSchema("required", true);
  };

  private checkRequired = () => {
    if (!this.schema.required) return true;
    return this.value !== null && this.value !== undefined;
  };

  public positive: Positive = () => {
    return this.addSchema("positive", true);
  };

  private checkPositive = () => {
    if (!this.schema.positive) return true;
    return this.value === undefined || this.value >= 0;
  };

  public negative: Negative = () => {
    return this.addSchema("negative", true);
  };

  private checkNegative = () => {
    if (!this.schema.negative) return true;
    return this.value === undefined || this.value >= 0;
  };

  public min: Min = (value) => {
    return this.addSchema("min", value);
  };

  private checkMin = () => {
    if (!this.schema.min) return true;
    return this.value === undefined || this.value >= this.schema.min;
  };

  public max: Max = (value) => {
    return this.addSchema("max", value);
  };

  private checkMax = () => {
    if (!this.schema.max) return true;
    return this.value === undefined || this.value <= this.schema.max;
  };

  public validate: Validate = (value, ctx) => {
    this.setContext(value, ctx);
    this.value = value;

    if (!this.checkValid()) {
      this.setError({ type: "valid", joi: "number" });
      return false;
    }
    if (!this.checkRequired()) {
      this.setError({ type: "required", joi: "number" });
      return false;
    }
    if (value === undefined) {
      this.setError();
      return true;
    }
    if (!this.checkMax()) {
      this.setError({
        type: "max",
        value: { max: this.schema.max || 0 },
        joi: "number",
      });
      return false;
    }
    if (!this.checkMin()) {
      this.setError({
        type: "min",
        value: { min: this.schema.min || 0 },
        joi: "number",
      });
      return false;
    }
    if (!this.checkPositive()) {
      this.setError({ type: "positive", joi: "number" });
      return false;
    }
    if (!this.checkNegative()) {
      this.setError({ type: "negative", joi: "number" });
      return false;
    }
    if (!this.checkInteger()) {
      this.setError({ type: "integer", joi: "number" });
    }
    this.setError();
    return true;
  };
}
