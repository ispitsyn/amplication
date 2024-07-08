import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const SkillShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Proficiency" source="proficiency" />
        <TextField label="Skill Name" source="skillName" />
        <TextField label="Skill Proficiency" source="skillProficiency" />
      </SimpleShowLayout>
    </Show>
  );
};
