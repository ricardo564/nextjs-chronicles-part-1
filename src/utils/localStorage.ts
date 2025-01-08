export function saveItemOnLocalStorage(
  itemName: string,
  itemValue: string,
) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(
      itemName,
      itemValue,
    );
  }
}

export function removeItemFromLocalStorage(
  itemName: string,
) {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(itemName);
  }
}

export function getItemFromLocalStorage(
  itemName: string,
) {
  if (typeof window !== 'undefined') {
    const itemValue
      = window.localStorage.getItem(itemName);

    return itemValue;
  }
}
