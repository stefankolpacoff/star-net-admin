import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
  NumberField,
  DateField,
  ImageField,
  TextInput,
  FilterForm,
  FilterButton,
  CreateButton,
  ListBase,
  Pagination,
} from "react-admin";

import Stack from "@mui/material/Stack";

const postFilters = [
  <TextInput
    label='Search by Title'
    source='article.title'
    defaultValue='bitcoin'
  />,
  <TextInput label='Search by Author' source='users' />,
  <TextInput label='Search by creation date' source='creationDate' />,
  <TextInput label='Search by update date' source='lastUpdateDate' />,
];

const ListToolbar = () => (
  <Stack direction='row' justifyContent='space-between'>
    <FilterForm filters={postFilters} />
    <div>
      <FilterButton filters={postFilters} />
      <CreateButton />
    </div>
  </Stack>
);
const ArticleList = (props: ListProps) => (
  <ListBase {...props}>
    <ListToolbar />
    <Datagrid rowClick='edit'>
      <NumberField source='id' sortBy='articles.id' />
      <TextField source='title' />
      <ReferenceField label='Author' source='idUser' reference='users'>
        <>
          <TextField source='firstName' /> <TextField source='lastName' />
        </>
      </ReferenceField>

      <ImageField source='mainImage' />
      <TextField source='mainContent' />
      <DateField source='creationDate' />
      <DateField source='lastUpdateDate' />
    </Datagrid>
    <Pagination />
  </ListBase>
);

export default ArticleList;
