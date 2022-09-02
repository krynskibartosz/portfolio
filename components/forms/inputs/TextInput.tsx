import { Column } from 'components';
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { INPUT } from '../Form';
import { getBorderColor } from '../utils';

//* Intersting props
// disabled?: boolean;
// required?: boolean;
// minLength?: number;
// maxLength?: number;
// pattern?: string;
// list?: string;
// results?: number;
// multiple?: boolean;

export interface TEXT_INPUT_PROPS extends INPUT {
  label: string;
  placeholder: string;
  borderColor?: string;
}

export const TextInput = ({
  error = false,
  value,
  setValue,
  label,
  placeholder,
  type = 'text',
  id,
  borderColor,
  ...rest
}: TEXT_INPUT_PROPS & InputHTMLAttributes<HTMLInputElement>) => {
  const setText = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const [focused, setFocused] = useState(false);

  //! the border is handle on the parent div of the input cause on mobile there's an uggly native border

  return (
    <Column className={`w-full`}>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 text-sm md:text-base font-semibold text-gray-800 dark:text-gray-400 first-letter:uppercase"
        >
          {label}
        </label>
      )}
      <div
        className={`border w-full rounded-xl bg-gray-50 dark:bg-gray-800  ${
          borderColor || getBorderColor(error, focused)
        }`}
      >
        <input
          id={id}
          className={`rounded-xl    bg-transparent outline-none w-full p-2.5 text-input`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value || ''}
          onChange={setText}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </Column>
  );
};
