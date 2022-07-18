import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const UserEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    <SimpleForm>
      <NumberInput source='id' disabled />
      <TextInput source='firstName' />
      <TextInput source='lastName' />
      <TextInput source='email' />
      <TextInput source='phoneNumber' />
      <NumberInput source='isAdmin' helperText='1 = admin / 0 = non-admin' />
      <DateInput source='registrationDate' disabled />
      <TextInput source='userPicture' />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
