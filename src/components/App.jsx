import { Route, Routes } from 'react-router-dom';
import { Phonebook } from './Phonebook/Phonebook.jsx';
import { RegisterView } from './Phonebook/RegisterView.jsx';
import { LogInView } from './Phonebook/LogInView.jsx';
import { Layout } from './Phonebook/Layout.jsx';
import { EmptyPage } from './Phonebook/EmptyPage.jsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EmptyPage />} />
        <Route path="login" element={<LogInView />} />
        <Route path="register" element={<RegisterView />} />
        <Route path="contacts" element={<Phonebook />} />
      </Route>
    </Routes>
  );
};
