import { Joi } from "./Joi";
import { Joi as JoiType } from ".";

type Items = (items: JoiType) => ArrayJoi;

type MinType = number;
type Min = (value: MinType) => ArrayJoi;

type MaxType = number;
type Max = (value: MaxType) => ArrayJoi;

type LengthType = number;
type Length = (value: LengthType) => ArrayJoi;

type Required = () => ArrayJoi;

type Validate = (value: any, context?: any) => boolean;

interface ArrayFormatting {
  required?: boolean;
  min?: number;
  max?: number;
  length?: number;
  valid?: any[];
}

export class ArrayJoi extends Joi {
  private itemSchema: JoiType | undefined;
  private itemsSchema: JoiType[] = [];
  private schema: ArrayFormatting = {};
  private value: any[] = [];

  public constructor(arr?: ArrayJoi) {
    super();
    if (arr !== undefined) {
      this.itemSchema = arr.itemSchema?.clone();
      this.schema = arr.schema;
    }
  }

  public addSchema = <keyType extends keyof ArrayFormatting>(
    key: keyType,
    value: ArrayFormatting[keyType]
  ) => {
    this.schema[key] = value;
    return this;
  };

  public clone = () => {
    return new ArrayJoi(this);
  };

  public items: Items = (items) => {
    this.itemSchema = items;
    return this;
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

  public required: Required = () => {
    return this.addSchema("required", true);
  };

  private checkRequired = () => {
    if (!this.schema.required) return true;
    return this.value !== undefined && this.value !== null;
  };

  public length: Length = (value) => {
    return this.addSchema("length", value);
  };

  private checkLength = () => {
    if (!this.schema.length) return true;
    return this.value.length === this.schema.length;
  };

  public validate: Validate = (values, ctx) => {
    const newCtx = this.setContext(values, ctx);
    this.value = values;

    if (!this.checkRequired()) {
      this.setError({ type: "required", joi: "array" });
      return false;
    }

    if (values === undefined) return true;
    if (!(values?.length >= 0)) {
      this.setError({ type: "wrong", joi: "array" });
      return false;
    }

    if (values === undefined) return true;

    if (!this.checkMax()) {
      this.setError({
        type: "max",
        joi: "array",
        value: { max: this.schema.max || 0 },
      });
      return false;
    }
    if (!this.checkMin()) {
      this.setError({
        type: "min",
        joi: "array",
        value: { min: this.schema.min || 0 },
      });
      return false;
    }
    if (!this.checkLength()) {
      this.setError({
        type: "length",
        joi: "array",
        value: { length: this.schema.length || 0 },
      });
      return false;
    }
    this.itemsSchema = values.map((v: any) => this.itemSchema?.clone());
    if (
      values
        .map((value: any, index: number) => {
          this.itemsSchema[index].validate(value, {
            ctx: newCtx.ctx,
            path: [...newCtx.path, index],
          });
        })
        .includes(false)
    )
      return false;
    this.setError();
    return true;
  };
}
