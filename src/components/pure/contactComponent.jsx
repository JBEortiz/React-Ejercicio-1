import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({contact}) => {

  return (
    <div>
        <h1>Contacto: {contact.name}</h1>
        <h2>Apellido: {contact.lastName}</h2>
        <h3>Email: {contact.email}, Estado : {contact.conect ?'Contacto En Línea':'Contacto No Disponible'}</h3>
    </div>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent