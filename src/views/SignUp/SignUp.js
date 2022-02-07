import { useState } from 'react';
import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { register } from '../../services/authenticationService'
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try{
      if (phone === '' || password === '' || confirmation === ''){
        setErrorMessage('Debes diligenciar todos los campos')
        throw new Error();
      }

      if (password !== confirmation){
        setErrorMessage('La contraseña no coincide')
        throw new Error();
      }

      setErrorMessage('');
      setInvalidCredentials(false);

      setLoading(true);
      const data = await register({phone: phone, username: password});
      console.log(data);
      setLoading(false);

      if(data == null){
        setErrorMessage('No te puedes registrar, contacta a un administrador')
        throw new Error();
      }
      
      setInvalidCredentials(false);
      navigate('/login');
    }
    catch{
      setInvalidCredentials(true);
    }
  }

  return (
    <div className="container">
    <Card className="text-center" style={{ width: '18rem'}}>
      <Card.Title className="tittle">Entra</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Iris</Card.Subtitle>
      <Card.Body className="card-body">
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Ingresa tu número de teléfono</Form.Label>
          <Form.Control type="phone" placeholder="Número de Teléfono" onChange={e=> setPhone(e.target.value)} />
          <Form.Text className="text-muted">
            {/*  We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUser">
          <Form.Label>Ingresa tu Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" onChange={e=> setPassword(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmation">
          <Form.Label>Confirma tu Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" onChange={e=> setConfirmation(e.target.value)}/>
        </Form.Group>

        {loading && (<div className="text-center my-3">
          <div className="spinner-border" role="status">
          </div>
        </div>)}
        {(invalidCredentials && <p className='text-danger'> {errorMessage} </p>)}

        <Button className="mt-2 w-75" variant="primary" type="submit">
          Entra
        </Button>
      </Form>
    </Card.Body>
    </Card>
    </div>

  );
}

export default SignUp;