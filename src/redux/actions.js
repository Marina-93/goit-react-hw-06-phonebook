import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('add', (contact) => ({
  payload: {
    contact: {
      id: shortid.generate(),
      ...contact,
    }
  }
}));

const deleteContact = createAction('delete');

const changeFilter = createAction('changeFilter');

const actions = {
  addContact,
  deleteContact,
  changeFilter,
};

export default actions;