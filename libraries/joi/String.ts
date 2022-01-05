import { Joi, Context } from "./Joi";
const Email = require("@sideway/address/lib/email");

type MinType = number;
type Min = (value: MinType) => StringJoi;

type MaxType = number;
type Max = (value: MaxType) => StringJoi;

type RegexType = RegExp;
type Regex = (value: RegexType) => StringJoi;

type AllowType = any[];
type Allow = (...value: AllowType) => StringJoi;

type Required = () => StringJoi;

type ValidType = (string | ((ctx: Context) => any))[];
type Valid = (...value: ValidType) => StringJoi;

type Validate = (value: any, context?: Context) => boolean;

interface StringFormatting {
  min?: MinType;
  max?: MaxType;
  regex?: RegexType;
  required?: boolean;
  email?: boolean;
  uri?: boolean;
  allow?: AllowType;
  valid?: ValidType;
}

export class StringJoi extends Joi {
  private schema: StringFormatting = {};
  private value: string = "";

  public constructor(string?: StringJoi) {
    super();
    if (string !== undefined) {
      this.schema = string.schema;
    }
  }

  public clone = () => {
    return new StringJoi(this);
  };

  public addSchema = <keyType extends keyof StringFormatting>(
    key: keyType,
    value: StringFormatting[keyType]
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

  public required: Required = () => {
    return this.addSchema("required", true);
  };

  private checkRequired = () => {
    if (!this.schema.required) return true;
    return this.value !== undefined && this.value !== null && this.value !== "";
  };

  public min: Min = (value) => {
    return this.addSchema("min", value);
  };

  private checkMin = () => {
    if (!this.schema.min) return true;
    return this.value.length >= this.schema.min;
  };

  public max: Max = (value) => {
    return this.addSchema("max", value);
  };

  private checkMax = () => {
    if (!this.schema.max) return true;
    return this.value.length <= this.schema.max;
  };

  public uri = () => {
    return this.addSchema("uri", true);
  };

  private checkUri = () => {
    if (!this.schema.uri) return true;
    const uriRegexp =
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    return uriRegexp.test(this.value);
  };

  public email = () => {
    return this.addSchema("email", true);
  };

  private checkEmail = () => {
    if (!this.schema.email) return true;
    // const emailRegexp =
    //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return emailRegexp.test(this.value);
    return Email.isValid(this.value);
  };

  public regex = (regex: RegExp) => {
    return this.addSchema("regex", regex);
  };

  private checkRegex = () => {
    if (!this.schema.regex) return true;
    return this.schema.regex.test(this.value);
  };

  public validate: Validate = (value, ctx) => {
    this.setContext(value, ctx);
    this.value = value;

    if (!this.checkRequired()) {
      this.setError({ type: "required", joi: "string" });
      return false;
    }

    if (value === undefined) return true;

    if (!this.checkValid()) {
      this.setError({ type: "valid", joi: "string" });
      return false;
    }
    this.setError();

    if (this.checkAllow()) return true;

    if (typeof value !== "string") {
      this.setError({ type: "wrong", joi: "string" });
      return false;
    }

    if (!this.checkMax()) {
      this.setError({
        type: "max",
        joi: "string",
        value: { max: this.schema.max || 0 },
      });
      return false;
    }
    if (!this.checkMin()) {
      this.setError({
        type: "min",
        joi: "string",
        value: { min: this.schema.min || 0 },
      });
      return false;
    }
    if (!this.checkRegex()) {
      this.setError({ type: "regex", joi: "string" });
      return false;
    }
    if (!this.checkEmail()) {
      this.setError({ type: "email", joi: "string" });
      return false;
    }

    if (!this.checkUri()) {
      this.setError({ type: "uri", joi: "string" });
      return false;
    }

    return true;
  };
}
