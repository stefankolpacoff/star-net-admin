import {
    Edit,
    ListProps,
    SimpleForm,
    ReferenceInput,
    SelectInput
  } from "react-admin";
  import { PostEditActions } from "./PostEditActions";

  export interface IPackage {
    name: string;
  }

  export interface ICategory {
    name: string;
  }

  const optionRenderer1 = (packagee: IPackage) => `${packagee.name}`;
  const optionRenderer2 = (category: ICategory) => `${category.name}`;
  
  export const PackCatEdit = (props: ListProps) => (
    <Edit {...props} actions={<PostEditActions />}>
      {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
      <SimpleForm>
      <ReferenceInput source="idPackage" reference="packages" label="Package">
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer1} />
      </ReferenceInput>
      <ReferenceInput source="idCategory" reference="categories" label="Category">
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer2} />
      </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
  