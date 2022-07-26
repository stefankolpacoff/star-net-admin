import {
    Datagrid,
    List,
    ListProps,
    TextField,
    NumberField,
    ImageField
  } from "react-admin";
  
  const GuideList = (props: ListProps) => (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <NumberField source='id' sortBy='guided.id' />
        <TextField source='title' />
        <ImageField source='mainPicture' />
        <TextField source='description' />
        <NumberField source='orderNumber' />
      </Datagrid>
    </List>
  );
  
  export default GuideList;
  