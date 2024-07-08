import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlogPostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="Published Date" source="publishedDate" />
        <TextInput label="Post Title" source="postTitle" />
        <TextInput label="Post Content" multiline source="postContent" />
        <DateTimeInput label="Post Published Date" source="postPublishedDate" />
      </SimpleForm>
    </Edit>
  );
};
