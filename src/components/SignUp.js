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
  const createUser = () => {
    if (validPassword && !alreadyExist) {
      mutateFunction();
      navigation.navigate('Login');
    } else {
      setRepeatPassword(validPassword == false);
      setRepeatedUser(alreadyExist);
    }
  }
  return (
    <div style={{ flex: 1, marginTop: '50%' }}>
      <p style={{ textAlign: 'center' }}>
        Insert username
      </p>
      <input 
        placeholder="username"
        isRequired
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
      {(repeatedUser && <p style={{ textAlign: 'center', color: 'red' }}>
        The username is already in use by other user
      </p>)}
      <p style={{ textAlign: 'center' }}>
        Insert password
      </p>
      <input 
        placeholder="password"
        secureTextEntry={true}
        isRequired={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
        asterik />
      <p style={{ textAlign: 'center' }}>
        Repeat password
      </p>
      <input 
        placeholder="password"
        secureTextEntry={true}
        isRequired={true}
        value={password2}
        onChangeText={(password2) => setPassword2(password2)}
        asterik />
      {(repeatPassword && <p style={{ textAlign: 'center', color: 'red'  }}>
        The passwords do not match
      </p>)}
      <div style={{ margin: 12 }}>

        <button
          
          onPress={createUser}
          title="Sign Up"
          color={'pink'}
        />
      </div>
    </div>
  );
}

export default SignUp;