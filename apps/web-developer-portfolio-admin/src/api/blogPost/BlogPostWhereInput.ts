import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BlogPostWhereInput = {
  id?: StringFilter;
  title?: StringFilter;
  description?: StringFilter;
  content?: StringNullableFilter;
  publishedDate?: DateTimeNullableFilter;
  postTitle?: StringNullableFilter;
  postContent?: StringNullableFilter;
  postPublishedDate?: DateTimeNullableFilter;
};
