import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  message?: SortOrder;
  name?: SortOrder;
};
