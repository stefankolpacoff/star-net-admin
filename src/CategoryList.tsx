import {
    Datagrid,
    List,
    ListProps,
    TextField,
    NumberField,
  } from "react-admin";
  
  const CategoryList = (props: ListProps) => (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <NumberField source='id' sortBy='categories.id' />
        <TextField source='name' />
        <TextField source='description' />
      </Datagrid>
    </List>
  );
  
  export default CategoryList;
  