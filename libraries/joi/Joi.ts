export type Context = { ctx: any; path: (string | number)[] };

type JoiType =
  | "string"
  | "object"
  | "number"
  | "boolean"
  | "array"
  | "date"
  | "any";

type RequiredError = { type: "required"; value?: {} };
type MinError = { type: "min"; value: { min: number } };
type MaxError = { type: "max"; value: { max: number } };
type LengthError = { type: "length"; value: { length: number } };
type EmailError = { type: "email"; value?: {} };
type UriError = { type: "uri"; value?: {} };
type ValidError = { type: "valid"; value?: { message?: string } };
type AllowError = { type: "allow"; value?: {} };
type AllowedError = { type: "allowed"; value?: {} };
type PositiveError = { type: "positive"; value?: {} };
type IntergeError = { type: "integer"; value?: {} };
type NegativeError = { type: "negative"; value?: {} };
type WrongError = { type: "wrong"; value?: {} };
type RegexError = { type: "regex"; value?: {} };

export type ErrorType = (
  | RequiredError
  | MinError
  | MaxError
  | LengthError
  | EmailError
  | UriError
  | ValidError
  | AllowError
  | IntergeError
  | PositiveError
  | NegativeError
  | WrongError
  | RegexError
  | AllowedError
) & { joi: JoiType };

type Error = ErrorType | { [key: string]: ErrorType | Error };

type SetContext = (value: any, ctx: Context | undefined) => Context;
export class Joi {
  protected error: Error | undefined;
  protected ctx?: Context;

  protected setError = (error?: ErrorType) => {
    this.error = error;
  };

  public getError = () => {
    return this.error;
  };

  protected setContext: SetContext = (value, ctx) => {
    ctx = ctx !== undefined ? ctx : { ctx: value, path: [] };
    this.ctx = ctx;
    return ctx;
  };
}
