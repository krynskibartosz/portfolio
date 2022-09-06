import { INPUT } from 'components/forms/Form';
import { onChangeHandler } from './utils';

type MULTIPLE_SELECT = {
  options: { value: string; label: string }[];
  id: string;
  required?: boolean;
  onChange?: (e?: any) => void;
};

export const NativeSelect = ({
  id,
  setValue,
  value,
  options,
  required = false,
  form,
  onChange,
}: MULTIPLE_SELECT & INPUT) => {
  return (
    <select
      size={5}
      form={form}
      required={required}
      onChange={(e) => {
        onChangeHandler({ event: e, setValue });
        if (typeof onChange === 'function') {
          onChange();
        }
      }}
      value={value}
      id={id}
      name={id}
      className="absolute top-0 left-0 z-20 w-full h-full opacity-0 appearance-none "
    >
      {options.map((el, i) => (
        <option key={i} value={el.value}>
          {el.label}
        </option>
      ))}
    </select>
  );
};
