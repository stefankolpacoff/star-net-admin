import {
    ListProps,
    Create,
    SimpleForm,
    TextInput,
    regex,
    Validator,
    required,
    minLength,
    maxLength,
    ReferenceInput,
    SelectInput,
    NumberInput,
  } from "react-admin";
  import MarkdownInput from "ra-input-markdown";
  
  import { PostEditActions } from "./PostEditActions";
  
  const validateName: Validator[] = [required(), minLength(2), maxLength(80)];
  const validateDescription: Validator[] = [required(), minLength(2)];
  
  export default interface IUser {
    firstName: string;
    lastName: string;
  }
  
  const optionRenderer = (user: IUser) => `${user.firstName} ${user.lastName}`;
  
  export const PackageCreate = (props: ListProps) => (
    <Create title='Ajouter un article' actions={<PostEditActions />} {...props}>
      <SimpleForm warnWhenUnsavedChanges>
        <TextInput label='name' source='name' validate={validateName} fullWidth/>
        <MarkdownInput source='description' validate={validateDescription} />
      </SimpleForm>
    </Create>
  );
  