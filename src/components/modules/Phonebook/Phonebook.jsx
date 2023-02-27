import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';
import { addContact, removeContact } from 'redux/contacts/contacts-slice';

import css from './phonebook.module.css';
import {
  getAllContacts,
  getFilteredContacts,
} from 'redux/contacts/contacts-selectors';

import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';

const Phonebook = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const allContacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const contactDubl = allContacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(contactDubl);
  };

  const onAddContact = ({ name, number }) => {
    console.log(name, number);
    if (isDublicate(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }
    dispatch(addContact({ name, number }));
  };

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  const handleFilter = ({ target }) => dispatch(setFilter(target.value));

  const isContact = Boolean(filteredContacts.length);

  return (
    <>
      <div className={css.con}>
        <div className={css.container}>
          <header className={css.header}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactsForm onSubmit={onAddContact} />
          </header>
          <div className={css.contact_library}>
            <h2 className={css.title}>Contacts</h2>

            <ContactsFilter filter={filter} handleChange={handleFilter} />
            {isContact && (
              <ContactsList
                removeContact={deleteContact}
                contacts={filteredContacts}
              />
            )}
            {!isContact && <p>No contacts in list</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Phonebook;
