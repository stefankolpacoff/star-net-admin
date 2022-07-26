import {
  BooleanField,
  Datagrid,
  EmailField,
  FunctionField,
  DateField,
  Identifier,
  List,
  ListProps,
  NumberField,
  Record,
  TextField,
} from "react-admin";
import BooleanNumField from "./BooleanNumField.jsx";

type recordType = {
  admin: boolean;
  id?: Identifier | undefined;
};

const UserList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <NumberField source='id' sortBy='users.id' />
        <TextField source='firstName' />
        <TextField source='lastName' />
        <EmailField source='email' />
        <TextField source='phoneNumber' />
        <BooleanNumField source='isAdmin' />
        <DateField source='registrationDate' />
        <TextField source='userPicture' />
      </Datagrid>
    </List>
  );
};

export default UserList;
