import React from 'react';

const ContactList = props => (
    props.contacts.map(contact => {
      return (
        <li key={contact.id}>
          <div>{contact.name}</div>
          <div>{contact.age}</div>
          <div>{contact.gender}</div>
        </li>
      )
    })
)

export default ContactList