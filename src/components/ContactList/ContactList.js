import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
// import onFilteredContactss from '../../components/contacts.json';

const ContactList = ({ onFilteredContacts, onDeleteContact }) => {
  return (
    <ul className={styles.List}>
      {/* <li>{console.log(onFilteredContactss)}</li> */}
      {onFilteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.Item}>
          <p className={styles.Contac}> {name}: </p>
          <p className={styles.Contac}> {number} </p>

          <button
            type="button"
            className={styles.Button}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  fileredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
