import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="Start Date" source="startDate" />
        <DateTimeInput label="End Date" source="endDate" />
        <TextInput label="Project Name" source="projectName" />
        <TextInput
          label="Project Description"
          multiline
          source="projectDescription"
        />
        <DateTimeInput label="Project Start Date" source="projectStartDate" />
        <DateTimeInput label="Project End Date" source="projectEndDate" />
      </SimpleForm>
    </Edit>
  );
};
