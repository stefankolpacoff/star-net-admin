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
    PasswordInput,
  } from "react-admin";
  
  import { PostEditActions } from "./PostEditActions";
  
  const validateFirstName: Validator[] = [required(), minLength(2), maxLength(80)];
  const validateLastName: Validator[] = [required(), minLength(2), maxLength(80)];
  const validateEmail: Validator[] = [required(), minLength(2), maxLength(150)];
  const validatePhoneNumber: Validator[] = [minLength(2), maxLength(40)];
  const validateAdmin: Validator[] = [required()];
  const validatePicture: Validator[] = [minLength(2)];
  const validatePassword: Validator[] = [required(), minLength(6), maxLength(255)];

  
  export const UserCreate = (props: ListProps) => (
    <Create title='Ajouter un article' actions={<PostEditActions />} {...props}>
      <SimpleForm warnWhenUnsavedChanges>
        <TextInput source='firstName' validate={validateFirstName} />
        <TextInput source='lastName' validate={validateLastName} />
        <TextInput source='email' validate={validateEmail} />
        <PasswordInput source='password' validate={validatePassword} />
        <TextInput source='phoneNumber' validate={validatePhoneNumber} />
        <NumberInput source='isAdmin' helperText='1 = admin / 0 = non-admin' validate={validateAdmin} />
        <TextInput source='userPicture' validate={validatePicture} />
      </SimpleForm>
    </Create>
  );
  