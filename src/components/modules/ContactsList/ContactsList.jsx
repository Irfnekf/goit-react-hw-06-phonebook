import css from './contactsList.module.css';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import { removeContact } from 'redux/contacts/contacts-slice';
import { useSelector, useDispatch } from 'react-redux';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  const item = contacts.map(({ id, name, number }) => (
    <li className={css.contactItem} key={id}>
      <p className={css.name}>
        {name}: <span className={css.number}>{number}</span>
      </p>
      <button
        className={css.deleteButton}
        onClick={() => deleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return <ul>{item}</ul>;
};

export default ContactsList;
