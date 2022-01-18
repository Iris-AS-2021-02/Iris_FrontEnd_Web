import { useState } from 'react';
import React from 'react';
import { graphql } from '@apollo/react-hoc';
import { gql, useQuery } from '@apollo/client';

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

  const login = () => {
     console.log("username",username,"password", password, data)
    if (isVerifiedUser()) {
      setPasswordIncorret(false);
      navigation.navigate('Home');
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
    <div >
      <p >
        Ingresa tu numero de telefono
      </p>
      <input 
        placeholder="numero"
        onChange={e  => setUsername(e.target.value)}
        value={username}
        
      />
      <p>
        Ingresa tu nombre de usuario
      </p>
      <input
        type='password'
        placeholder="username"
        onChange={e=> setPassword(e.target.value)}
        value={password}
        />
      {(passwordIncorret && <p>
        password or username incorrect
      </p>)}
      <div>

        <button  onClick={login}
          title="Login"
          color={'pink'}>
         Entra
          </button>
      </div>
      <div >
        <button
         
          onClick={goToSignUp}
          title="Sign up"
          color={'pink'}
        >
          Registrate
          </button>
      </div>
    </div>
  );
}


export default Login;