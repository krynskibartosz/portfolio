import { StringJoi } from "./String";
import { ArrayJoi } from "./Array";
import { ObjectJoi } from "./Object";
import { NumberJoi } from "./Number";
import { BooleanJoi } from "./Boolean";
import { AnyJoi } from "./Any";
import { Context } from "./Joi";
import { deepGet } from "libraries/dash";
import { DateJoi } from "./Date";

export type Joi =
  | StringJoi
  | NumberJoi
  | ArrayJoi
  | BooleanJoi
  | ObjectJoi
  | AnyJoi
  | DateJoi;
type String = () => StringJoi;
type Number = () => NumberJoi;
type Date = () => DateJoi;
type Array = () => ArrayJoi;
type Boolean = () => BooleanJoi;
type Object = (object: { [key: string]: Joi }) => ObjectJoi;
type Any = () => AnyJoi;
// type Ref = () => RefJoi;

export const string: String = () => {
  return new StringJoi();
};

export const number: Number = () => {
  return new NumberJoi();
};

export const boolean: Boolean = () => {
  return new BooleanJoi();
};

export const array: Array = () => {
  return new ArrayJoi();
};

export const object: Object = (object) => {
  return new ObjectJoi(object);
};

export const any: Any = () => {
  return new AnyJoi();
};

export const date: Date = () => {
  return new DateJoi();
};

export const objectId: Any = () => {
  return new AnyJoi().objectId();
};

export const ref = (ref: string) => {
  return (ctx: Context) => {
    const relPath = ref.split(".");
    const path = ctx.path;
    path.pop();
    relPath.forEach((node: string | number) => {
      if (node === "") path.pop();
      else path.push(node);
    });

    return deepGet(ctx.ctx, path);
  };
};
