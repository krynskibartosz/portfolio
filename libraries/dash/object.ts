export const isStrNum = (data: any): data is StrNum => {
  return typeof data === "string" || typeof data === "number";
};

export type StrNum = string | number;

type DeepGet = (
  obj: any,
  props: StrNum | StrNum[] | ((obj: any) => any),
  defaultValue?: any
) => any;

export const deepGet: DeepGet = (obj, props, defaultValue) => {
  if (typeof props === "function") return props(obj);
  if (typeof props === "string" || typeof props === "number") return obj[props];
  if (obj === undefined || obj === null) return defaultValue;
  if (props.length === 0) return obj;

  var foundSoFar = obj[props[0]];
  var remainingProps = props.slice(1);
  return deepGet(foundSoFar, remainingProps, defaultValue);
};

export const deepSet = (
  obj: any,
  props: StrNum | StrNum[],
  value: any,
  force = false
) => {
  if (obj === undefined || obj === null) return;
  if (isStrNum(props)) obj[props] = value;
  else if (props.length === 1) obj[props[0]] = value;
  else {
    if (obj[props[0]] === undefined && force) obj[props[0]] = {};
    var foundSoFar = obj[props[0]];
    var remainingProps = props.slice(1);
    deepSet(foundSoFar, remainingProps, value);
  }
};

export const deepCopy = (inObject: any) => {
  let outObject: any, value: any, key: any;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  }

  if (inObject instanceof Date) return new Date(inObject);

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopy(value);
  }

  return outObject;
};

// Helper to return a value's internal object [[Class]]
// That this returns [object Type] even for primitives
const getClass = (obj: any) => {
  return Object.prototype.toString.call(obj);
};

/*
 ** @param a, b        - values (Object, RegExp, Date, etc.)
 ** @returns {boolean} - true if a and b are the object or same primitive value or
 **                      have the same properties with the same values
 */
export const objectTester: any = (a: any, b: any) => {
  // If a and b reference the same value, return true
  if (a === b) return true;

  // If a and b aren't the same type, return false
  if (typeof a != typeof b) return false;

  // Already know types are the same, so if type is number
  // and both NaN, return true
  if (typeof a == "number" && isNaN(a) && isNaN(b)) return true;

  // Get internal [[Class]]
  var aClass = getClass(a);
  var bClass = getClass(b);

  // Return false if not same class
  if (aClass != bClass) return false;

  // If they're Boolean, String or Number objects, check values
  if (
    aClass == "[object Boolean]" ||
    aClass == "[object String]" ||
    aClass == "[object Number]"
  ) {
    return a.valueOf() == b.valueOf();
  }

  // If they're RegExps, Dates or Error objects, check stringified values
  if (
    aClass == "[object RegExp]" ||
    aClass == "[object Date]" ||
    aClass == "[object Error]"
  ) {
    return a.toString() == b.toString();
  }

  // Otherwise they're Objects, Functions or Arrays or some kind of host object
  if (typeof a == "object" || typeof a == "function") {
    // For functions, check stringigied values are the same
    // Almost certainly false if a and b aren't trivial
    // and are different functions
    if (aClass == "[object Function]" && a.toString() != b.toString())
      return false;

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    // If they don't have the same number of keys, return false
    if (aKeys.length != bKeys.length) return false;

    // Check they have the same keys
    if (
      !aKeys.every(function (key) {
        return b.hasOwnProperty(key);
      })
    )
      return false;

    // Check key values - uses ES5 Object.keys
    return aKeys.every(function (key) {
      return objectTester(a[key], b[key]);
    });
  }
  return false;
};

export const isEmpty = (obj: any) => {
  return Object.keys(obj).length === 0;
};

export const getAttr = (obj: any, attributesNames: string[]) => {
  const newObject: any = {};
  for (const attributesName of attributesNames) {
    newObject[attributesName] = obj[attributesName];
  }
  return newObject;
};
