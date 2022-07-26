import {
    DateInput,
    Edit,
    ListProps,
    NumberInput,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput
  } from "react-admin";
  import { PostEditActions } from "./PostEditActions";

  export interface IArticle {
    title: string;
  }

  export interface ICategory {
    name: string;
  }

  const optionRenderer1 = (article: IArticle) => `${article.title}`;
  const optionRenderer2 = (category: ICategory) => `${category.name}`;
  
  export const ArtCatEdit = (props: ListProps) => (
    <Edit {...props} actions={<PostEditActions />}>
      {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
      <SimpleForm>
      <ReferenceInput source="idArticle" reference="articles" label="Article" >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer1} fullWidth />
      </ReferenceInput>
      <ReferenceInput source="idCategory" reference="categories" label="Category">
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer2} fullWidth/>
      </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
  