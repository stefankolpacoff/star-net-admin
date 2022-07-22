import {
    ListProps,
    Create,
    SimpleForm,
    TextInput,
    Validator,
    required,
    minLength,
    maxLength,
    NumberInput,
  } from "react-admin";
  
  import { PostEditActions } from "./PostEditActions";
  
  const validateTitle: Validator[] = [required(), minLength(2), maxLength(200)];
  const validateMainPicture: Validator[] = [required(), minLength(2)];
  const validateDescription: Validator[] = [required(),minLength(2)];
  const validateOrderNumber: Validator[] = [required()];
  
  export const GuideCreate = (props: ListProps) => (
    <Create title='Ajouter un élément de tutoriel' actions={<PostEditActions />} {...props}>
      <SimpleForm warnWhenUnsavedChanges>
        <TextInput label='Title' source='title' validate={validateTitle} />
        <TextInput label='Main Picture' source='mainPicture' validate={validateMainPicture} fullWidth />
        <TextInput label='Description' source='description' validate={validateDescription} fullWidth multiline />
        <NumberInput label='Order Number' source='orderNumber' validate={validateOrderNumber} />
      </SimpleForm>
    </Create>
  );
  