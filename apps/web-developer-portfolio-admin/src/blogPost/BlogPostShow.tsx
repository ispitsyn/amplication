import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BlogPostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Title" source="title" />
        <TextField label="Description" source="description" />
        <TextField label="Content" source="content" />
        <TextField label="Published Date" source="publishedDate" />
        <TextField label="Post Title" source="postTitle" />
        <TextField label="Post Content" source="postContent" />
        <TextField label="Post Published Date" source="postPublishedDate" />
      </SimpleShowLayout>
    </Show>
  );
};
