import css from './Phonebook.module.css';
import { NavLink } from 'react-router-dom';

export const EmptyPage = () => {
  return (
    <h1 className={css.emptyTitle}>
      Please <NavLink to="/register">Register</NavLink> or{' '}
      <NavLink to="/login">Log In</NavLink> now.
    </h1>
  );
};
