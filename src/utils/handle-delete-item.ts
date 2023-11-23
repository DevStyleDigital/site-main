export function handleDeleteItem(i: number, arr: any[]) {
  const newArr = [...arr];
  newArr.splice(i, 1);
  return newArr;
}
