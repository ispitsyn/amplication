import { SortOrder } from "../../util/SortOrder";

export type SkillOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  proficiency?: SortOrder;
  skillName?: SortOrder;
  skillProficiency?: SortOrder;
};
