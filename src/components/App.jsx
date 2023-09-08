import { Route, Routes } from 'react-router-dom';
import { Phonebook } from './Phonebook/Phonebook.jsx';
import { RegisterView } from './Phonebook/RegisterView.jsx';
import { LogInView } from './Phonebook/LogInView.jsx';
import { Layout } from './Phonebook/Layout.jsx';
import { EmptyPage } from './Phonebook/EmptyPage.jsx';
import authOperations from '../redux/authOperations.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from './routes/PrivateRoute.js';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EmptyPage />} />
        <Route path="login" element={<LogInView />} />
        <Route path="register" element={<RegisterView />} />
        <Route
          path="contacts"
          element={<PrivateRoute redirectTo="/" component={<Phonebook />} />}
        />
      </Route>
    </Routes>
  );
};
