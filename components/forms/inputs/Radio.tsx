import { Column, Row } from "components";
import { INPUT } from "../Form";

type RADIO = {
  options: { value: string; label: string }[];
  label?: string;
  onChange?: (e?: any) => void;
} & INPUT;

export const Radio = ({
  value,
  label,
  setValue,
  options,
  onChange,
  ...rest
}: RADIO) => {
  const handleChange = (event: any) => {
    setValue(event.target.value);
    if (typeof onChange === "function") {
      onChange();
    }
  };

  return (
    <Column className="gap-y-3">
      {label && (
        <p className="text-gray-800 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
          {label}
        </p>
      )}

      {options.map((el, i) => {
        const checked = value === el.value;
        return (
          <Row key={i} className="items-center group gap-x-2">
            <div className="relative grid w-full h-full place-items-center ">
              <input
                type="radio"
                value={el.value}
                checked={checked}
                style={{ minWidth: 24, minHeight: 24 }}
                className="w-6 h-6 transition-all  border-gray-300 appearance-none cursor-pointer group-hover:border-[#38BCF8] checked:bg-purple checked:border-[#38BCF8] border-2 dark:checked:border-yellow-400 dark:group-hover:border-yellow-400 rounded-xl bg-gray-50 "
                onChange={handleChange}
                id={`radio-${i}`}
                {...rest}
              />
              {checked && (
                <Row
                  positionX="center"
                  positionY="center"
                  className="absolute top-0 w-6 h-6 pb-1 pr-1 rounded-full"
                >
                  <CheckIcon className="z-20 w-4 h-4 " />
                </Row>
              )}
            </div>
            <label
              key={i}
              htmlFor={`radio-${i}`}
              className={` font-semibold cursor-pointer first-letter:uppercase text-gray-800 dark:text-gray-400 ${
                checked
                  ? "!text-gray-900 dark:!text-white"
                  : "dark:group-hover:text-gray-300"
              }`}
            >
              {el.label}
            </label>
          </Row>
        );
      })}
    </Column>
  );
};

function CheckIcon({ ...rest }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        className="stroke-[#38BCF8] dark:stroke-yellow-400"
        stroke=""
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.701 13.049l4 4 10-10"
      ></path>
    </svg>
  );
}
