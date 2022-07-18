import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
  NumberField,
  DateField,
} from "react-admin";

const ArticleList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <NumberField source='id' sortBy='articles.id' />
      <TextField source='title' />
      <ReferenceField label='Author' source='idUser' reference='users'>
        <>
          <TextField source='firstName' /> <TextField source='lastName' />
        </>
      </ReferenceField>

      <TextField source='mainImage' />
      <TextField source='mainContent' />
      <DateField source='creationDate' />
      <DateField source='lastUpdateDate' />
    </Datagrid>
  </List>
);

export default ArticleList;
