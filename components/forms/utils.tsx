export const onChangeHandler = ({
  event,
  setValue,
}: {
  event: React.ChangeEvent<HTMLSelectElement>;
  setValue: (e?: any) => void;
}) => {
  setValue(event.target.value);
};

export const getBorderColor = (error: boolean, focused: boolean) => {
  if (error) {
    return "!border-red";
  }
  if (focused) {
    return "!border-gray-900 dark:!border-gray-600";
  }
  return "border-gray-300 dark:border-gray-700 dark:hover:!border-gray-600 hover:border-gray-900";
};
