import { useSelector } from 'react-redux';

import css from './phonebook.module.css';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';

const Phonebook = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const isContact = Boolean(filteredContacts.length);

  return (
    <>
      <div className={css.con}>
        <div className={css.container}>
          <header className={css.header}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactsForm />
          </header>
          <div className={css.contact_library}>
            <h2 className={css.title}>Contacts</h2>

            <ContactsFilter />
            {isContact && <ContactsList />}
            {!isContact && <p>No contacts in list</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Phonebook;
