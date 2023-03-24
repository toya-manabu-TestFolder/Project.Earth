// POST----------------------------------------------------------------
export function cartPostValue(
  userValue: number,
  itemValue: number,
  quantityValue: number
) {
  return {
    method: "POST",
    bodyValue: {
      user_id: userValue,
      item_id: itemValue,
      quantity: quantityValue,
    },
  };
}

// PATCH----------------------------------------------------------------
export function cartPatchValue(
  userValue: number,
  itemValue: number,
  quantityValue: number
) {
  return {
    method: "PATCH",
    bodyValue: {
      user_id: userValue,
      item_id: itemValue,
      quantity: quantityValue,
    },
  };
}

// DELETE----------------------------------------------------------------
export function cartDeleteValue(userValue: number, itemValue: number) {
  return {
    method: "DELETE",
    bodyValue: {
      user_id: userValue,
      item_id: itemValue,
    },
  };
}
