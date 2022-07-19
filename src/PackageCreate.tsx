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
  
  const validateTitle: Validator[] = [required(), minLength(2), maxLength(80)];
  const validateMainImage: Validator[] = [
    required(),
    minLength(2),
    maxLength(255),
  ];
  const validateIdUser: Validator[] = [required()];
  const validateMainContent: Validator[] = [required(), minLength(2)];
  
  export default interface IUser {
    firstName: string;
    lastName: string;
  }
  
  const optionRenderer = (user: IUser) => `${user.firstName} ${user.lastName}`;
  
  export const PackageCreate = (props: ListProps) => (
    <Create title='Ajouter un article' actions={<PostEditActions />} {...props}>
      <SimpleForm warnWhenUnsavedChanges>
        <TextInput label='Title' source='title' validate={validateTitle} />
        <TextInput
          label='Image'
          source='mainImage'
          validate={validateMainImage}
          fullWidth
        />
        <MarkdownInput source='mainContent' validate={validateMainContent} />
        <ReferenceInput label='Author' source='idUser' reference='users'>
          {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
          <SelectInput optionText={optionRenderer} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
  