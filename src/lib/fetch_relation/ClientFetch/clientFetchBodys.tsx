// POST
export function cartImportValue(
  queryValue: string,
  userValue: number,
  itemValue: number,
  quantityValue: number
) {
  return {
    method: "POST",
    query: queryValue,
    user: userValue,
    item: itemValue,
    quantityNumber: quantityValue,
  };
}

// DELETE
export function deleteValue(queryValue: string) {
  return {
    method: "DELETE",
    query: queryValue,
    user: 0,
    item: 0,
    quantityNumber: 0,
  };
}
