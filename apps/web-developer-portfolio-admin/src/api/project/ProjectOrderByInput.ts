import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  projectName?: SortOrder;
  projectDescription?: SortOrder;
  projectStartDate?: SortOrder;
  projectEndDate?: SortOrder;
};
