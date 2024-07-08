import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BlogPostList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Blog Posts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
