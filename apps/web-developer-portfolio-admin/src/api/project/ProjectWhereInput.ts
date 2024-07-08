import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  projectName?: StringNullableFilter;
  projectDescription?: StringNullableFilter;
  projectStartDate?: DateTimeNullableFilter;
  projectEndDate?: DateTimeNullableFilter;
};
