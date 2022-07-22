import * as React from "react";
import "./App.css";
import { Admin, Resource, fetchUtils, EditGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import UserList from "./UserList";
import UserEdit from "./UserEdit";
import { UserCreate } from "./UserCreate";
import PersonIcon from "@mui/icons-material/Person";

import authProvider from "./authProvider";

import ArticleList from "./ArticleList";
import { ArticleCreate } from "./ArticleCreate";
import { ArticleEdit } from "./ArticleEdit";
import ArticleIcon from "@mui/icons-material/Article";

import PackageList from "./PackageList";
import { PackageCreate } from "./PackageCreate";
import { PackageEdit } from "./PackageEdit";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

import CategoryList from "./CategoryList";
import { CategoryEdit } from "./CategoryEdit";
import { CategoryCreate } from "./CategoryCreate";
import CategoryIcon from "@mui/icons-material/Category";

import CommentList from "./CommentList";
import CommentEdit from "./CommentEdit";
import ModeCommentIcon from "@mui/icons-material/ModeComment";

import FaqList from "./FaqList";
import { FaqEdit } from "./FaqEdit";
import { FaqCreate } from "./FaqCreate";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

import ArtPackList from "./ArtPackList";
import { ArtPackEdit } from "./ArtPackEdit";
import { ArtPackCreate } from "./ArtPackCreate";

import ArtCatList from "./ArtCatList";
import { ArtCatEdit } from "./ArtCatEdit";
import { ArtCatCreate } from "./ArtCatCreate";
import CableIcon from "@mui/icons-material/Cable";

import PackCatList from "./PackCatList";
import { PackCatEdit } from "./PackCatEdit";
import { PackCatCreate } from "./PackCatCreate";
import Dashboard from "./Dashboard";

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const { token } = JSON.parse(localStorage.getItem("auth") || "");
  options.headers.set("Authorization", `${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(
  "http://localhost:3000/api",
  httpClient
);
const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}>
    <Resource
      name='users'
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      icon={PersonIcon}
      options={{ label: "Utilisateurs" }}
    />

    <Resource
      name='articles'
      list={ArticleList}
      edit={ArticleEdit}
      create={ArticleCreate}
      icon={ArticleIcon}
      options={{ label: "Articles" }}
    />

    <Resource
      name='packages'
      list={PackageList}
      edit={PackageEdit}
      create={PackageCreate}
      icon={LibraryBooksIcon}
      options={{ label: "Packages" }}
    />

    <Resource
			name="articlesPackages"
			list={ArtPackList}
			edit={ArtPackEdit}
			create={ArtPackCreate}
		/>
    <Resource
      name='categories'
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
      icon={CategoryIcon}
      options={{ label: "Catégories" }}
    />
    <Resource
      name='articlesCategories'
      list={ArtCatList}
      edit={ArtCatEdit}
      create={ArtCatCreate}
      icon={CableIcon}
      options={{ label: "Catégories par Articles" }}
    />

    <Resource
      name='packagesCategories'
      list={PackCatList}
      edit={PackCatEdit}
      create={PackCatCreate}
      icon={CableIcon}
      options={{ label: "Catégories par Packages" }}
    />

    <Resource name='articlesPackage' />

    <Resource
      name='comments'
      list={CommentList}
      edit={CommentEdit}
      icon={ModeCommentIcon}
      options={{ label: "Commentaires" }}
    />

    <Resource
      name='faq'
      list={FaqList}
      edit={FaqEdit}
      create={FaqCreate}
      icon={ContactSupportIcon}
      options={{ label: "FAQ" }}
    />
  </Admin>
);

export default App;

