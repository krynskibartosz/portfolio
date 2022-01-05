import { Column, Row, TextInput } from "components";
import { INPUT } from "components/forms/Form";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";

interface TEXT_INPUT_PROPS extends INPUT {
  label: string;
  placeholder: string;
  maxLength: number;
}

export const TextAreaInput = ({
  error = false,
  maxLength,
  value,
  setValue,
  label,
  id,
  ...rest
}: TEXT_INPUT_PROPS & InputHTMLAttributes<HTMLTextAreaElement>) => {
  const setText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const [focused, setFocused] = useState(false);
  const borderColor = focused
    ? "border-purple"
    : error
    ? "border-red`"
    : "border-gray-300 hover:border-purple ";

  return (
    <Column className={`w-full`}>
      {label && (
        <label
          htmlFor={label}
          className={`mb-2 first-letter:uppercase text-sm font-semibold text-gray-900`}
        >
          {label}
        </label>
      )}
      <div className={`border w-full rounded-xl bg-gray-50 ${borderColor} `}>
        <textarea
          id={id || label}
          className={`text-gray-700 hover:text-gray-800 focus:text-gray-900  bg-transparent sm:text-sm w-full p-2.5 max-h-96 `}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value || ""}
          onChange={setText}
          maxLength={maxLength}
          {...rest}
        />
      </div>
    </Column>
  );
};

export type COUNTER_INPUT = {
  maxLength: number;
  type?: "input" | "textArea";
  style?: any;
} & TEXT_INPUT_PROPS;

export const CounterInput = ({
  maxLength = 300,
  type = "textArea",
  placeholder,
  setValue,
  label,
  ...rest
}: COUNTER_INPUT &
  InputHTMLAttributes<HTMLTextAreaElement> &
  InputHTMLAttributes<HTMLInputElement>) => {
  const valueLength = rest.value?.length;

  const setText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (typeof setText === "function") {
      setValue(e);
    }
  };

  return (
    <Column className="w-full ">
      {type === "input" ? (
        <TextInput
          label={label}
          placeholder={placeholder}
          setValue={setText}
          {...rest}
        />
      ) : (
        <TextAreaInput
          maxLength={maxLength}
          label={label}
          placeholder={placeholder}
          setValue={setText}
          {...rest}
        />
      )}
      <Row positionY="center" positionX="right" className="mt-2 ml-auto">
        <p
          className={`border-gray-200 text-gray-500 mb-2 
            `}
        >
          <span className={valueLength > maxLength ? "text-red" : ""}>
            {valueLength || 0}
          </span>
          /{maxLength}
        </p>
      </Row>
    </Column>
  );
};
