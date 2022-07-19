import {
    Datagrid,
    List,
    ListProps,
    TextField,
    NumberField,
    ReferenceField
  } from "react-admin";
  
  const ArtPackList = (props: ListProps) => (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <NumberField source='id' sortBy='articlescategories.id' />
        <ReferenceField label='Article' source='idArticle' reference='articles'>
        <>
          <TextField source='title' />
        </>
        </ReferenceField>
        <ReferenceField label='Package' source='idPackage' reference='packages'>
        <>
          <TextField source='name' />
        </>
        </ReferenceField>
      </Datagrid>
    </List>
  );
  
  export default ArtPackList;
  