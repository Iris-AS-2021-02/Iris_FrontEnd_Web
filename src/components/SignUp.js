import { useState } from 'react';
import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import './SignUp.css'
import { Card, InputGroup, FormControl, Button, DropdownButton, Dropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [repeatPassword, setRepeatPassword] = useState(false);
  const [repeatedUser, setRepeatedUser] = useState(false);

  const CREATE_USER = gql`
  mutation {
    createUser( userAuth : {
      Name: "${password}"
      Number: "${username}"
    }) {
          Name
    }
  }
`;

  const GET_USER_BY_NUMBER = gql`
  query {
    usersByNumber(number : "${username}") {
      Name
      Number
    } 
  }
  `;
  const users = useQuery(GET_USER_BY_NUMBER);
  console.log("usrs",users, GET_USER_BY_NUMBER,`
  query {
    usersByNumber(number : "${username}") {
      Name
      Number
    } 
  }
  `);
  const alreadyExist =users?.data?.usersByNumber?.Name != undefined;
  const [mutateFunction, { data, loading, error }] = useMutation(CREATE_USER);

  const validPassword = password === password2;
  const createUser =async () => {
    if (validPassword && !alreadyExist) {
     const result = await mutateFunction();
     window.location.replace('./login');
      
    } else {
      setRepeatPassword(validPassword == false);
      setRepeatedUser(alreadyExist);
    }
    window.location.replace('./login');
  }
  return (
    <div className="container">
     <Card className="text-center" style={{ width: '18rem' }}>
     <Card.Body className="card-body">
     <Card.Title className="tittle">Registro</Card.Title>
     <Card.Subtitle className="mb-2 text-muted">Iris</Card.Subtitle>
     <label>Numero telefonico</label>
       <InputGroup className="mb-3">
        
        
                        <FormControl
                            placeholder="Numero de Telefono"
                            onChange={e=> setUsername(e.target.value)}
                            aria-label="Numero telefonico"
                            aria-describedby="basic-addon1"
                        />
        </InputGroup>
        <label>Nombre De Usuario</label>
        <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Nombre De Usuario"
                            onChange={e=> setPassword(e.target.value)}
                            aria-label="Nombre De Usuario"
                            aria-describedby="basic-addon1"
                        />
        </InputGroup>
        <label>Confirma Tu Nombre De Usuario</label>
        <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Confirma Tu Nombre De Usuario"
                            onChange={e=> setPassword2(e.target.value)}
                            aria-label="Nombre De Usuario"
                            aria-describedby="basic-addon1"
                        />
        </InputGroup>
        <Button onClick={createUser}>Registrarse</Button>
     </Card.Body>
     </Card>
    </div>
  );
}

export default SignUp;