import { Route, Routes } from 'react-router-dom';
import { Phonebook } from './Phonebook/Phonebook.jsx';
import { RegisterView } from './Phonebook/RegisterView.jsx';
import { LogInView } from './Phonebook/LogInView.jsx';
import { Layout } from './Phonebook/Layout.jsx';
import { EmptyPage } from './Phonebook/EmptyPage.jsx';
import authOperations from '../redux/authOperations.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PrivateRoute } from '../routes/PrivateRoute.js';
import { RestrictedRoute } from '../routes/RestrictedRoute.js';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute component={EmptyPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={LogInView} redirectTo="/contacts" />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={RegisterView} redirectTo="/contacts" />
          }
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={Phonebook} redirectTo="/" />}
        />
      </Route>
    </Routes>
  );
};
