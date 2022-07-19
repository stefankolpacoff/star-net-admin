import {
    Datagrid,
    List,
    ListProps,
    TextField,
    NumberField,
  } from "react-admin";
  
  const PackageList = (props: ListProps) => (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <NumberField source='id' sortBy='package.id' />
        <TextField source='name' />
        <TextField source='description' />
      </Datagrid>
    </List>
  );
  
  export default PackageList;
  