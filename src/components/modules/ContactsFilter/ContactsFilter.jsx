import PropTypes from 'prop-types';
import css from './contactsFilter.module.css';

const ContactsFilter = ({ handleChange, filter }) => {
  return (
    <div className={css.searchWrapper}>
      <label className={css.label}> Find contacts by name:</label>
      <input
        placeholder="Search"
        value={filter}
        className={css.filterInput}
        name="filter"
        onChange={handleChange}
      />
    </div>
  );
};

ContactsFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default ContactsFilter;
