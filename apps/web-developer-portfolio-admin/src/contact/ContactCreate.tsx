import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ContactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Message" multiline source="message" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
