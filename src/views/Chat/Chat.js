import React from "react";
import { Button } from 'react-bootstrap';
import { useLocation } from "react-router";
import defaultContact from '../../components/ContactCard/defaultContact.png'
import { setContactSettings } from "../../services/graphql";
import 'bootstrap/dist/css/bootstrap.min.css';
import wallpaper from './whatsapp-wallpaper.jpg'

function Chat(){

    const { state } = useLocation();
    const [image, setImage] = React.useState(state.wallpaper);

    const getDataURI = () => {
        return new Promise((resolve, reject) => {

            try{
                const input =  document.getElementById('inputGroupFile01');
                const file = input.files[0];
                let reader = new FileReader();
                let dataURI = '';
                
                reader.onloadend = () => {
                    dataURI = reader.result;
                    resolve(dataURI);
                }
    
                reader.readAsDataURL(file);
            }
            catch(e){
                console.log(e);
                reject();
            }
        });
    }


    const uploadWallpaper = async () => {
        const dataURI = await getDataURI();
        const extension = 'jpg';
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis1NzMwNTcxNzQzMzQiLCJuYW1lIjoiSGFyb2xkIEJhcnRvbG8iLCJpYXQiOjE2NDM3NzI2NjV9.w3NZ9HbGuPDd3yPrKvAN2ogA1jbFmlNNDtb_EdMmPq8';
        const response = await setContactSettings(state.contactID, state.blocked, state.seeStatus, dataURI, extension, true, token);
        setImage(response.wallpaper);
    }

    return (
        <React.Fragment>
            <div className='d-flex'>
                <div className="w-25 card m-3" style={{minWidth: "5rem"}} key={state.contactID}>
                    <div style={{minHeight: "200px", maxHeight: "200px"}} className="p-3 d-flex justify-content-center">
                        <img style={{height: "150px", width: "150px"}} className="card-img-top" src={defaultContact} alt="Default contact"/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">Nombre: {state.contactName}</h5>
                        <p className="card-text text-center">Celular: {state.contactPhone}</p>
                        <p className="card-text text-center">Bloqueado: { state.blocked ? "Sí" : "No" }</p>
                        <p className="card-text text-center">Ve tus estados: { state.seeStatus ? "Sí" : "No" }</p>

                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="input-group w-75">
                                <div className="custom-file">
                                    <input
                                    type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01"
                                    />
                                </div>
                            </div>
                            <Button variant="primary" className="text-center w-75" onClick={ uploadWallpaper }>Cambiar wallpaper</Button>
                        </div>
                    </div>
                </div>
                <div className="w-75 m-3">
                    <img src={ image == null ? wallpaper : image } style={{ width: "100%"}} alt="wallpaper" ></img>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Chat;