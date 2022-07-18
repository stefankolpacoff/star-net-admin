import { AuthProvider } from 'react-admin';

type IUserInfo = {
  id: string;
  firstname: string;
  isAdmin: number;
};

const authProvider: AuthProvider = {
  login: (props) => {
    const request = new Request('http://localhost:3000/api/login', {
      method: 'POST',
      body: JSON.stringify({ email: props.username, password: props.password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status === 401) {
          throw new Error('INCORRECT_CREDENTIALS');
        } else if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth: IUserInfo) => {
        console.log(auth);
        if (auth.isAdmin == 1) {
          localStorage.setItem('auth', JSON.stringify(auth));
        } else {
          throw new Error('INSUFFICIENT_PRIVILEGES');
        }
      })
      .catch((error) => {
        if (error.message === 'INSUFFICIENT_PRIVILEGES') {
          throw new Error('Insufficient privileges');
        } else if (error.message === 'INCORRECT_CREDENTIALS') {
          throw new Error('Invalid username or password');
        } else {
          throw new Error('Network error');
        }
      });
  },
  checkAuth: () => {
    // Required for the authentication to work
    return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    // Required for the authentication to work
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem('auth');
    // Required for the authentication to work
    return Promise.resolve();
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const userInfo: IUserInfo = JSON.parse(
        localStorage.getItem('auth') || ''
      );
      const id: string = userInfo.id || '0';
      const firstname: string = userInfo.firstname || '';
      const avatar: string = '';
      return Promise.resolve({ id, fullName: firstname, avatar });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  // ...
};

export default authProvider;
