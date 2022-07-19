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
  ReferenceField,
} from "react-admin";
import BooleanNumField from "./BooleanNumField.js";

type recordType = {
  admin: boolean;
  id?: Identifier | undefined;
};

const CommentList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <ReferenceField label='Author' source='idUser' reference='users'>
          <>
            <TextField source='firstName' /> <TextField source='lastName' />
          </>
        </ReferenceField>
        <TextField source='title' />
        <TextField source='text' />
        <BooleanNumField source='report' />
        <DateField source='date' />
        <ReferenceField
          label='Article title'
          source='idArticle'
          reference='articles'>
          <>
            <TextField source='title' />
          </>
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default CommentList;
