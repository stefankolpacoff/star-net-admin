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
  
  import { PostEditActions } from "./PostEditActions";
  
  const validateTitle: Validator[] = [required(), minLength(2), maxLength(80)];
  const validateMainImage: Validator[] = [
    required(),
    minLength(2),
    maxLength(255),
  ];
  const validateQuestion: Validator[] = [required(),minLength(2), maxLength(200)];
  const validateAnswer: Validator[] = [required(), minLength(2)];
  const validateOrderNumber: Validator[] = [required()];
  
  export const FaqCreate = (props: ListProps) => (
    <Create title='Ajouter une question' actions={<PostEditActions />} {...props}>
      <SimpleForm warnWhenUnsavedChanges>
        <TextInput label='Question' source='question' validate={validateQuestion} fullWidth />
        <TextInput label='Answer' source='answer' validate={validateAnswer}fullWidth multiline />
        <NumberInput label='Order Number' source='orderNumber' validate={validateOrderNumber} />
      </SimpleForm>
    </Create>
  );
  