import css from './Phonebook.module.css';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/authSelectors.js';
import authOperations from '../../redux/authOperations.js';

export const Layout = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={css.layout}>
      <header className={css.header}>
        {isLogin ? (
          <NavLink to="/contacts" className={css.singupLink}>
            Contacts
          </NavLink>
        ) : (
          <NavLink to="/" className={css.singupLink}>
            Contacts
          </NavLink>
        )}

        {isLogin ? (
          <div className={css.user}>
            <span className={css.userName}>Hello {name}</span>
            <button
              type="button"
              className={css.logout}
              onClick={() => dispatch(authOperations.logOut())}
            >
              Log out
            </button>
          </div>
        ) : (
          <ul className={css.singupList}>
            <li className={css.singupItem}>
              <NavLink to="/register" className={css.singupLink}>
                Register
              </NavLink>
            </li>
            <li className={css.singupItem}>
              <NavLink to="/login" className={css.singupLink}>
                Log in
              </NavLink>
            </li>
          </ul>
        )}
      </header>

      <main>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
