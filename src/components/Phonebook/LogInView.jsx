import css from './Phonebook.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/authOperations.js';

export const LogInView = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password })).then(() => {
      window.location.reload();
    });
    setEmail('');
    setPassword('');
  };

  return (
    <form autoComplete="off" className={css.singUpForm} onSubmit={handleSubmit}>
      <label className={css.label}>
        Email
        <input
          className={css.input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className={css.btn}>
        Log In
      </button>
    </form>
  );
};
