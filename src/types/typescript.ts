export type cookieType = {
  category_id: number;
  user_id: number;
};

export type storageType = {
  item_id: number;
  quantity: number;
};

export type cartImportValueType = {
  query: string;
  user: number;
  item: number;
  quantityNumber: number;
};

export type deleteValueType = {
  query: string;
};

export type clientValueType = {
  method: string;
  query: string;
  user: number;
  item: number;
  quantityNumber: number;
};
