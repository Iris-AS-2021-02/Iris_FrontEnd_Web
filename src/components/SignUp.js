import { useState } from 'react';
import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import './SignUp.css'

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
    <div>
      <p>
        Ingresa tu numero de telefono
      </p>
      <input 
        type='text'
        placeholder="username"
        value={username}
        onChange={e  => setUsername(e.target.value)}
      />
      <p>
        Ingresa tu nombre de usuario
      </p>
      <input 
        placeholder="password"
        secureTextEntry={true}
        value={password}
        onChange={e=> setPassword(e.target.value)}
        asterik />
      <p>
        Por favor confirma tu nombre de usuario
      </p>
      <input 
        placeholder="password"
        secureTextEntry={true}
        isRequired={true}
        value={password2}
        onChange={e=> setPassword2(e.target.value)}
        asterik />
      
      <div>

        <button
          
          onClick={createUser}
          
        >
          Registrate
        </button>
      </div>
    </div>
  );
}

export default SignUp;