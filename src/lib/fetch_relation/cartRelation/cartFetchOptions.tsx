// POST
export function cartPostValue(
  userValue: number,
  itemValue: number,
  quantityValue: number
) {
  return {
    method: "POST",
    user: userValue,
    item: itemValue,
    quantityNumber: quantityValue,
  };
}

// PATCH
export function cartPatchValue(
  userValue: number,
  itemValue: number,
  quantityValue: number
) {
  return {
    method: "PATCH",
    user: userValue,
    item: itemValue,
    quantityNumber: quantityValue,
  };
}

// DELETE
export function cartDeleteValue(queryValue: string) {
  return {
    method: "DELETE",
    query: queryValue,
    user: 0,
    item: 0,
    quantityNumber: 0,
  };
}
