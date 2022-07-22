import {
    Edit,
    ListProps,
    NumberInput,
    SimpleForm,
    TextInput,
  } from "react-admin";
  import { PostEditActions } from "./PostEditActions";
  
  export const GuideEdit = (props: ListProps) => (
    <Edit {...props} actions={<PostEditActions />}>
      {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
      <SimpleForm>
        <NumberInput source='id' disabled />
        <TextInput source='title' /> 
        <TextInput source='mainPicture' fullWidth /> 
        <TextInput source='description' fullWidth multiline />
        <NumberInput source='orderNumber' />
      </SimpleForm>
    </Edit>
  );
  