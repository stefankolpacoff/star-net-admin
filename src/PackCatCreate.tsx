import {
    ListProps,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    NumberInput,
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
  
  export const PackCatCreate = (props: ListProps) => (
    <Create title='Ajouter une nouvelle catégorie à un package' actions={<PostEditActions />} {...props}>
      <SimpleForm warnWhenUnsavedChanges>
      <ReferenceInput source="idPackage" reference="packages" label="Package">
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer1} />
      </ReferenceInput>
      <ReferenceInput source="idCategory" reference="categories" label="Category">
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer2} />
      </ReferenceInput>
      </SimpleForm>
    </Create>
  );
  