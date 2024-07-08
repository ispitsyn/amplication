import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlogPostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="Published Date" source="publishedDate" />
        <TextInput label="Post Title" source="postTitle" />
        <TextInput label="Post Content" multiline source="postContent" />
        <DateTimeInput label="Post Published Date" source="postPublishedDate" />
      </SimpleForm>
    </Create>
  );
};
