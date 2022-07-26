import {
    Datagrid,
    List,
    ListProps,
    TextField,
    NumberField,
    ReferenceField
  } from "react-admin";
  
  const PackCatList = (props: ListProps) => (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <NumberField source='id' sortBy='packagescategories.id' />
        <ReferenceField label='Package' source='idPackage' reference='packages'>
        <>
          <TextField source='name' />
        </>
        </ReferenceField>
        <ReferenceField label='Category' source='idCategory' reference='categories'>
        <>
          <TextField source='name' />
        </>
        </ReferenceField>
      </Datagrid>
    </List>
  );
  
  export default PackCatList;
  