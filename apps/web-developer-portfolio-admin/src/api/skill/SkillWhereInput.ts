import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SkillWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  proficiency?: "Option1";
  skillName?: StringNullableFilter;
  skillProficiency?: "Option1";
};
