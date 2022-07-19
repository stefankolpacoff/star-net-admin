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
  
//   export default interface IUser {
//     firstName: string;
//     lastName: string;
//   }
  
//   const optionRenderer = (user: IUser) => `${user.firstName} ${user.lastName}`;
  
  export const PackageEdit = (props: ListProps) => (
    <Edit {...props} actions={<PostEditActions />}>
      {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
      <SimpleForm>
        <NumberInput source='id' disabled />
        <TextInput source='name' />
        <TextInput source='description' />
      </SimpleForm>
    </Edit>
  );
  