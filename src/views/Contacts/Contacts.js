import React, { useState } from 'react'
import { getContacts } from '../../services/contactsService'
import ContactCard from '../../components/ContactCard/ContactCard'

function Contacts (){
    const [contacts, setContacts] = useState([]);

    React.useEffect(() => {
        let isCancelled = false;

        getContacts().then(data => {
            if (!isCancelled)
                setContacts(data);
        });

        return () => {
            isCancelled = true;
        }
    }, [])

    return(
        <React.Fragment>
            <div>
                <h1 className="text-center mt-3">Contactos</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        contacts.map((contact) => { 
                            return(
                                <ContactCard contact={contact} key={contact.contactID} />
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contacts;