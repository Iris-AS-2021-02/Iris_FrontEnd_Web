import { useState } from 'react';
import React from 'react';
import { graphql } from '@apollo/react-hoc';
import { gql, useQuery } from '@apollo/client';
import { Card, InputGroup, FormControl, Button, DropdownButton, Dropdown, Form } from 'react-bootstrap';
import loginService from '../services/loginService'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUserByNumber } from '../services/graphql'

function Login ({ navigation }){

  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  
  const toMain = () => {
    window.location.replace('/main')
  }
  const handleLogin = async (event) => {
    event.preventDefault();

      try{
        const response = await loginService.Login({phone: phone, username: username});
        if(response == null){
          setInvalidCredentials(true);
          return;
        }
        
        setUser(response);
        setInvalidCredentials(false);
        console.log(response)
      }
      catch{
        setInvalidCredentials(true);
      }


    // navigation.navigate('SignUp');
  }

  
  return (
    <div className="container">
      <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Title className="tittle">Entra</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Iris</Card.Subtitle>
        <Card.Body className="card-body">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Ingresa tu número de teléfono</Form.Label>
            <Form.Control type="phone" placeholder="Número de Teléfono" onChange={e=> setPhone(e.target.value)} />
            <Form.Text className="text-muted">
              {/*  We'll never share your email with anyone else. */}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>Ingresa tu nombre de usuario</Form.Label>
            <Form.Control type="password" placeholder="Nombre de Usuario" onChange={e=> setUsername(e.target.value)}/>
          </Form.Group>

          {(invalidCredentials && <p> Número de teléfono o nombre de usuario incorrecto </p>)}

          <Button onClick={toMain} variant="primary" type="submit">
            Entra
          </Button>
        </Form>
      </Card.Body>
     </Card>
    </div>
  );
}

export default Login;