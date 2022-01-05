interface ObjectWithId {
  _id?: string;
}

export const uniq = <T extends ObjectWithId>(data: T[]) => {
  return [...new Set(data.map((el) => el._id))].map((id) => {
    return data.find((l) => l._id === id);
  });
};

export const toSelectableArray = (arr: any[]) => {
  if (arr?.length <= 0) return [];
  let selectableArray: { value: string; label: string }[] = [];
  arr.map((el) => {
    selectableArray.push({ value: el, label: el });
  });
  return selectableArray;
};
