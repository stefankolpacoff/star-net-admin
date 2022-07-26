import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  ReferenceField,
  TextField,
} from "react-admin";
import MarkdownInput from "ra-input-markdown";

import { PostEditActions } from "./PostEditActions";

const CommentEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    <SimpleForm>
      <ReferenceField label='Author' source='idUser' reference='users'>
        <>
          <TextField source='firstName' /> <TextField source='lastName' />
        </>
      </ReferenceField>
      <TextInput source='title' fullWidth />
      <MarkdownInput source='text' />
      <DateInput source='date' />
    </SimpleForm>
  </Edit>
);

export default CommentEdit;
