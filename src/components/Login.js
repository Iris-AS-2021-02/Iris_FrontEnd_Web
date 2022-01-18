import { useState } from 'react';
import React from 'react';
import { graphql } from '@apollo/react-hoc';
import { gql, useQuery } from '@apollo/client';
import { Card, InputGroup, FormControl, Button, DropdownButton, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login ({ navigation }){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIncorret, setPasswordIncorret] = useState(false);

  const { loading, error, data } = useQuery(gql`
  query {
    usersByNumber(number : "${username}") {
      Name
      Number
    } 
  },
  `);


  const isVerifiedUser = () => {
    return data?.usersByNumber?.Name === password;
  }

  const login =async () => {
     console.log("username",username,"password", password, data)
     const result = await isVerifiedUser();
     
    if (isVerifiedUser()) {
      setPasswordIncorret(false);
      window.location.replace('./');
    } else {
      setPasswordIncorret(true);
    }
  }
  const goToSignUp = () => {
    console.log(username);
    console.log(password);
    setPasswordIncorret(false);
    navigation.navigate('SignUp');

  }
  return (
    <div className="container">
       <Card className="text-center" style={{ width: '18rem' }}>
     <Card.Body className="card-body">
     <Card.Title className="tittle">Entra</Card.Title>
     <Card.Subtitle className="mb-2 text-muted">Iris</Card.Subtitle>
     <label>Ingresa tu numero de telefono</label>
       <InputGroup className="mb-3">
        
        
                        <FormControl
                            placeholder="Numero de Telefono"
                            onChange={e=> setUsername(e.target.value)}
                            aria-label="Numero telefonico"
                            aria-describedby="basic-addon1"
                        />
        </InputGroup>
        <label>Ingresa tu nombre de usuario</label>
        <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Nombre De Usuario"
                            onChange={e=> setPassword(e.target.value)}
                            aria-label="Nombre De Usuario"
                            aria-describedby="basic-addon1"
                            value={password}
                        />
                        {(passwordIncorret && <p>
        password or username incorrect
      </p>)}
        </InputGroup>
        
        <Button  onClick={login}>Entra</Button>
     </Card.Body>
     </Card>
    </div>
  );
}


export default Login;