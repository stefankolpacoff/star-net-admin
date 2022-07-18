import * as React from 'react';
import { Admin, Resource, fetchUtils, EditGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import UserList from './UserList';
import UserEdit from './UserEdit';
import AddressList from './AddressList';
import authProvider from './authProvider';
import { AddressCreate } from './AddressCreate';
import { AddressEdit } from './AddressEdit';

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth') || '');
  options.headers.set('Authorization', `${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(
  'http://localhost:3000/api',
  httpClient
);
const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} />
    <Resource
      name="addresses"
      list={AddressList}
      edit={AddressEdit}
      create={AddressCreate}
    />
  </Admin>
);

export default App;
