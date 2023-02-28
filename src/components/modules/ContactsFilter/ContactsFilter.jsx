import css from './contactsFilter.module.css';

import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';

import { useSelector, useDispatch } from 'react-redux';

const ContactsFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const handleFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={css.searchWrapper}>
      <label className={css.label}> Find contacts by name:</label>
      <input
        placeholder="Search"
        value={filter}
        className={css.filterInput}
        name="filter"
        onChange={handleFilter}
      />
    </div>
  );
};

export default ContactsFilter;
