import * as React from "react";
import { Admin, Resource, fetchUtils, EditGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import UserList from "./UserList";
import UserEdit from "./UserEdit";

import authProvider from "./authProvider";
import AddressList from "./AddressList";
import { AddressCreate } from "./AddressCreate";
import { AddressEdit } from "./AddressEdit";

import ArticleList from "./ArticleList";
import { ArticleCreate } from "./ArticleCreate";
import { ArticleEdit } from "./ArticleEdit";

import CategoryList from "./CategoryList";
import { CategoryEdit } from "./CategoryEdit";
import { CategoryCreate } from "./CategoryCreate";

import FaqList from "./FaqList";
import { FaqEdit } from "./FaqEdit";
import { FaqCreate } from "./FaqCreate";

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
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name='users' list={UserList} edit={UserEdit} />

    <Resource
      name='articles'
      list={ArticleList}
      edit={ArticleEdit}
      create={ArticleCreate}
    />

    <Resource name='packages' />
    <Resource
     name='categories'
     list={CategoryList} 
     edit={CategoryEdit}
     create={CategoryCreate}
     />
    <Resource name='articlesCategories' />
    <Resource name='packagesCategories' />
    <Resource name='completedArticles' />
    <Resource name='articlesPackage' />

    <Resource 
      name='faq'
      list={FaqList}
      edit={FaqEdit}
      create={FaqCreate}
       />

    <Resource name='comments' />
    <Resource name='badges' />

    <Resource name='' />
  </Admin>
);

export default App;
