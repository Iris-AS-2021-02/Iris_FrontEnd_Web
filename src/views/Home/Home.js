import React from "react";
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

function Home() {
    const toLogin = () => {
        window.location.replace('./login')
    }
    const toRegister = () => {
        window.location.replace('/signup')
    }

    return (
        <div className="container">
            <Card className="text-center">
                <Card.Header>Bienvenidos a Iris</Card.Header>
                <Card.Body>
                    
                    <Card.Text>
                       Comunicate con tus amigos y seres queridos, pasa al login para comenzar
                    </Card.Text>
                    <Button onClick={toLogin} variant="primary" >Ingresa</Button>
                    <Button onClick={toRegister} variant="primary">Registrate</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Iris</Card.Footer>
            </Card>
        </div>
    )
}

export default Home;