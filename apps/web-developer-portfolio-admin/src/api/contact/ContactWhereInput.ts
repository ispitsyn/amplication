import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContactWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  message?: StringNullableFilter;
  name?: StringNullableFilter;
};
