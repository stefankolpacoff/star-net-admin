import {
    ListProps,
    Create,
    SimpleForm,
    TextInput,
    regex,
    Validator,
    required,
    minLength,
    maxLength,
    ReferenceInput,
    SelectInput,
    NumberInput,
  } from "react-admin";
  
  import { PostEditActions } from "./PostEditActions";

  export interface IArticle {
    title: string;
  }

  export interface IPackage {
    name: string;
  }

  const optionRenderer1 = (article: IArticle) => `${article.title}`;
  const optionRenderer2 = (packageItem: IPackage) => `${packageItem.name}`;
  
  export const ArtPackCreate = (props: ListProps) => (
    <Create title='Ajouter un nouvel article à un package' actions={<PostEditActions />} {...props}>
      <SimpleForm warnWhenUnsavedChanges>
      <ReferenceInput source="idArticle" reference="articles" label="Article">
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer1} />
      </ReferenceInput>
      <ReferenceInput source="idPackage" reference="packages" label="Package">
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer2} />
      </ReferenceInput>
      </SimpleForm>
    </Create>
  );
  