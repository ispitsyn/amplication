import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  content?: SortOrder;
  publishedDate?: SortOrder;
  postTitle?: SortOrder;
  postContent?: SortOrder;
  postPublishedDate?: SortOrder;
};
