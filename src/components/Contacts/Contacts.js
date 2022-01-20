import React, { useState } from "react"
import { getContacts } from "../../services/contactsService"


class Contacts extends React.Component{

    constructor (){
        super()
        this.state = { contacts: [], dataIsLoaded: false }
    }

    componentDidMount(){
        let contacts = [];

        getContacts().then(data => {
            console.log(data);
            this.setState({ contacts: data, dataIsLoaded: true })
        })
    }

    render(){
        const {contacts, dataisLoaded} = this.state;
        return(

            <div>
                <h1 className="text-center mt-3">Contactos</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        contacts.map((contact) => {
                            return (
                            <div className="card m-3" style={{minWidth: "5rem"}} key={contact.contactID}>
                                <div style={{minHeight: "200px", maxHeight: "200px"}} className="p-3">
                                    <img style={{width: "150px"}} className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1024px-Google_Contacts_icon.svg.png" alt="Card image cap"/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{contact.contactName}</h5>
                                    <p className="card-text">{contact.contactPhone}</p>
                                    <a href="#" className="btn btn-primary">Escribir Mensaje</a>
                                </div>
                            </div>
                        )})
                    }
                </div>

            </div>
        );
    }
}

export default Contacts;