import css from './Phonebook.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/authOperations.js';

export const RegisterView = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password })).then(() => {
      window.location.reload();
    });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form autoComplete="off" className={css.singUpForm} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
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
        Register
      </button>
    </form>
  );
};
