import {
    DateInput,
    Edit,
    ListProps,
    NumberInput,
    SimpleForm,
    TextInput,
  } from "react-admin";
  import { PostEditActions } from "./PostEditActions";
  
  export const FaqEdit = (props: ListProps) => (
    <Edit {...props} actions={<PostEditActions />}>
      {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
      <SimpleForm>
        <NumberInput source='id' disabled />
        <TextInput source='question' fullWidth />  
        <TextInput source='answer' fullWidth multiline />
        <NumberInput source='orderNumber' />
      </SimpleForm>
    </Edit>
  );
  