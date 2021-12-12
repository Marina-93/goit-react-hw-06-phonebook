import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import actions from '../../redux/actions';
import PropTypes from "prop-types";
import './ContactList.css';

export default function ContactList() {
  const dispatch = useDispatch();
  
  const getContacts = (state) => state.contacts.contacts;
  const getFilter = (state) => state.contacts.filter;

  const getFilterList = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(normalizedFilter)
      })
    }
  );
  
  const list = useSelector(getFilterList);

  return (
    <ul className="list">
      {list.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            className="button-list"
            type="button"
            onClick={() => dispatch(actions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}


ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number
}