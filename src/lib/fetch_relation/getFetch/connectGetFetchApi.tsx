import { Post } from "@/lib/fetch_relation/const/fetch";

export const connectGetFetchApi = async (queryValue: any) => {
  return Post({ query: queryValue }, "/api/getFetch/connectGetFetchApi");
};
