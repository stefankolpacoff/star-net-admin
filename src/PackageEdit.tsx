import {
    DateInput,
    Edit,
    ListProps,
    maxLength,
    NumberInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
  } from "react-admin";
  import { PostEditActions } from "./PostEditActions";
  
  
  export const PackageEdit = (props: ListProps) => (
    <Edit {...props} actions={<PostEditActions />}>
      {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
      <SimpleForm>
        <NumberInput source='id' disabled />
        <TextInput source='name' fullWidth/>
        <TextInput source='description' fullWidth multiline/>
      </SimpleForm>
    </Edit>
  );
  