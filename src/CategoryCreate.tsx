import {
    ListProps,
    Create,
    SimpleForm,
    TextInput,
    Validator,
    required,
    minLength,
    maxLength,
    ReferenceInput,
    SelectInput,
  } from "react-admin";
  
  import { PostEditActions } from "./PostEditActions";
  
  const validateName: Validator[] = [required(), minLength(2), maxLength(80)];
  const validateDescription: Validator[] = [required(), minLength(2)];
  
  export const CategoryCreate = (props: ListProps) => (
    <Create title='Ajouter une catégorie' actions={<PostEditActions />} {...props}>
      <SimpleForm warnWhenUnsavedChanges>
        <TextInput label='Name' source='name' validate={validateName} />
        <TextInput label='Description' source='description' validate={validateDescription} />
      </SimpleForm>
    </Create>
  );
  