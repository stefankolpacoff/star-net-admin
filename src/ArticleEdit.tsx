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
import MarkdownInput from "ra-input-markdown";
import { PostEditActions } from "./PostEditActions";

export default interface IUser {
  firstName: string;
  lastName: string;
}

const optionRenderer = (user: IUser) => `${user.firstName} ${user.lastName}`;

export const ArticleEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source='id' disabled />
      <TextInput source='title' />
      <ReferenceInput label='Author' source='idUser' reference='users'>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>

      <TextInput source='mainImage' fullWidth />
      <MarkdownInput source='mainContent' />
      <DateInput source='creationDate' disabled />
      <DateInput source='lastUpdateDate' disabled />
    </SimpleForm>
  </Edit>
);
