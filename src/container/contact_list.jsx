import React from 'react'
import ContactComponent from '../components/pure/contactComponent';
import { Contact } from '../models/contact.class'

export const ContactList = () => {

  const defaultContact =  new Contact('Juan', 'Berenguer',"juan@gmail.com",true);
  return (
    <div>
        <h1>your contact is:</h1>
        <h1>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </h1>
    </div>
  );
}
