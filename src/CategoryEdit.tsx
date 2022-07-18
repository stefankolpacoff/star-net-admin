import {
    DateInput,
    Edit,
    ListProps,
    NumberInput,
    SimpleForm,
    TextInput,
  } from "react-admin";
  import { PostEditActions } from "./PostEditActions";
  
  export const CategoryEdit = (props: ListProps) => (
    <Edit {...props} actions={<PostEditActions />}>
      {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
      <SimpleForm>
        <NumberInput source='id' disabled />
        <TextInput source='name' />  
        <TextInput source='description' fullWidth />
      </SimpleForm>
    </Edit>
  );
  