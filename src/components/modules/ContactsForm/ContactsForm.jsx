import { useState } from 'react';
import css from './contactsForm.module.css';
import PropTypes from 'prop-types';
import inititalState from '../ContactsForm/initialState';

const ContactsForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...inititalState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();

    const result = onSubmit({ name, number });
    if (result) {
      setState({ ...inititalState });
    }
  };

  const { name, number } = state;

  return (
    <form action="" onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="" className={css.label}>
        Name
      </label>
      <input
        className={css.input}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="" className={css.label}>
        Number
      </label>
      <input
        className={css.input}
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactsForm;
