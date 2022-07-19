import {
    Datagrid,
    List,
    ListProps,
    TextField,
    NumberField,
  } from "react-admin";
  
  const FaqList = (props: ListProps) => (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <NumberField source='id' sortBy='faqs.id' />
        <TextField source='question' />
        <TextField source='answer' />
        <NumberField source='orderNumber' />
      </Datagrid>
    </List>
  );
  
  export default FaqList;
  