import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
      prepare: data => {
        console.log(data);
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    removeContact: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
  },
});
export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
