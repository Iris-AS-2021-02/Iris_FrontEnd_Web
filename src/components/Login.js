import { useState } from 'react';
import React from 'react';
import { Card, InputGroup, FormControl, Button, DropdownButton, Dropdown, Form } from 'react-bootstrap';
import loginService from '../services/loginService'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login ({ navigation }){

  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try{
      if (phone === '' || username === '')
        throw new Error();

      setLoading(true);
      const token = await loginService.Login({phone: phone, username: username});
      setLoading(false);

      if(token == null){
        setInvalidCredentials(true);
        return;
      }
      
      setInvalidCredentials(false);
      sessionStorage.setItem('token', JSON.stringify(token));

    }
    catch{
      setInvalidCredentials(true);
    }

    // navigation.navigate('SignUp');
  }
  
  return (
    <div className="container">
      <Card className="text-center" style={{ width: '18rem'}}>
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
            <Form.Label>Ingresa tu Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" onChange={e=> setUsername(e.target.value)}/>
          </Form.Group>

          {loading && (<div className="text-center my-3">
            <div className="spinner-border" role="status">
            </div>
          </div>)}
          {(invalidCredentials && <p className='text-danger'> Credenciales inválidas </p>)}

          <Button className="mt-2 w-75" variant="primary" type="submit">
            Entra
          </Button>
        </Form>
      </Card.Body>
     </Card>
    </div>
  );
}

export default Login;