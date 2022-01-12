export const onChangeHandler = ({
  event,
  setValue,
}: {
  event: React.ChangeEvent<HTMLSelectElement>;
  setValue: (e?: any) => void;
}) => {
  setValue(event.target.value);
};
