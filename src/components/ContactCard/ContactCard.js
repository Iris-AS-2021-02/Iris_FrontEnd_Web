import React, { useState } from "react"
import defaultContact from './defaultContact.png';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function ContactCard ( { contact } ){
    const navigate = useNavigate();

    const getChat = () => {
        navigate('/chat', { state: contact });
    }
    
    return(
        <React.Fragment>
            <div className="card m-3" style={{minWidth: "5rem"}} key={contact.contactID}>
                <div style={{minHeight: "200px", maxHeight: "200px"}} className="p-3">
                    <img style={{width: "150px"}} className="card-img-top" src={defaultContact} alt="Default contact"/>
                </div>
                <div className="card-body m-0">
                    <h5 className="card-title text-center">{contact.contactName}</h5>
                    <p className="card-text text-center">{contact.contactPhone}</p>
                    <Button variant="primary" className="text-center" onClick={ getChat }>Escribir Mensaje</Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactCard;