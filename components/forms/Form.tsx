// @ts-nocheck
import { useState, useEffect, FormEvent, ReactNode } from 'react';
import { deepGet, deepSet } from 'libraries/dash';
import { deepCopy, isEmpty, objectTester } from 'libraries/dash/object';
export type STR_NUM = string | number;

export type INPUT_FCT = (name: STR_NUM | STR_NUM[]) => INPUT;

export type INPUT = {
  setValue: (value: any) => void;
  attempted: boolean;
  error: any;
  value: any;
  form: string;
};

type FORM_CHILDREN = {
  inputProps: INPUT_FCT;
  body: any;
  errors: any;
  handleSubmit: () => void;
  changes: any;
  isUpdated: boolean;
};
export interface FORM {
  initialBody: any;
  reset?: any;
  children: (data: FORM_CHILDREN) => ReactNode;
  submit: (body: any) => void;
  schema?: any;
  noSubmit?: boolean;
  updated?: boolean;
  showLogs?: boolean;
  className?: string;
  name: string;
  id: string;
  form: string;
}

/*
 * Form component
 *
 * PROPS
 * @children: Take the input component as children
 * @schema: Make the client-side validation with the schema if provided
 * @initialBody: Take an initial body with the default values of the inputs
 * @submit: Need a button with type 'submit' to submit the form
 *
 * RETURN
 * Gives to the children the inputProps, the body and the errors,
 *
 * @inputProps: a function which takes as argument the name of
 * the input and return its props, the setProp, the error, and
 * the value
 * @error: all the errors of the validation
 * @body: the body of the form
 *
 */
export const Form = ({
  children,
  schema,
  submit,
  initialBody,
  reset,
  noSubmit,
  className = '',
  updated,
  showLogs,
  name,
  id,
  form,
}: FORM) => {
  // The body created with the initialBody
  const [body, setBody] = useState<any>(deepCopy(initialBody));

  // If the submit action has already been attempted
  const [attempted, setAttempted] = useState<boolean>(false);

  // The object with all the errors
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    setBody(deepCopy(initialBody));
    setErrors({});
    setAttempted(false);
  }, [reset]);

  // Validate each time the body is updated
  useEffect(() => {
    if (attempted) validate();
  }, [body]);

  const getChanges = () => {
    const changes: any = {};
    for (const key in body) {
      if (!objectTester(body[key], initialBody[key])) changes[key] = body[key];
    }
    return changes;
  };

  const changes = getChanges();
  const isUpdated = !isEmpty(changes);

  // Generators of the function that update the body
  const setValue = (key: STR_NUM | STR_NUM[]) => {
    return (value: any) => {
      deepSet(body, key, value, true);
      setBody({ ...body });
    };
  };

  if (showLogs) {
    console.log(`body`, body);
    console.log(`changes`, changes);
    console.log(`errors`, errors);
  }

  // The props to pass to the inputs
  const inputProps: INPUT_FCT = (name) => {
    return {
      // The function to update the body
      setValue: setValue(name),
      // The error of the input
      error: deepGet(errors, name),
      // The value of the body
      value: deepGet(body, name),
      // The attempt
      attempted: attempted,
      // The name of the form
      form: form,
    };
  };

  // Set the errors and return true if no errors, false otherwise
  const validate: () => boolean = () => {
    if (schema === undefined) return true;
    if (schema.validate(updated ? changes : body)) {
      setErrors({});
      return true;
    }
    setErrors(schema.getError());
    return false;
  };

  // Handle the submit
  const handleSubmit = () => {
    setAttempted(true);
    if (validate()) {
      submit(updated ? changes : body);
    }
  };

  // Handle the submit from form:
  const handleSubmitFromform = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form
      className={`w-full ${className}`}
      onSubmit={noSubmit ? null : handleSubmitFromform}
      name={name}
      id={id}
    >
      {children({
        inputProps,
        body,
        errors,
        handleSubmit,
        changes,
        isUpdated,
      })}
    </form>
  );
};
