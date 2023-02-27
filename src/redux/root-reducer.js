import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import contactsReduser from './contacts/contacts-slice';
import filterReduser from './filter/filter-slice';

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
