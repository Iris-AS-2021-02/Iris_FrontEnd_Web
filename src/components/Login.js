import { useState } from 'react';
import React from 'react';
import { graphql } from '@apollo/react-hoc';
import { gql, useQuery } from '@apollo/client';



const Login = ({ navigation }) => {

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
    <div style={{ flex: 1, marginTop: '50%' }}>
      <p style={{ textAlign: 'center' }}>
        Insert username
      </p>
      <input 
        placeholder="pas"
        isRequired
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
      <p style={{ textAlign: 'center' }}>
        Insert password
      </p>
      <input
        placeholder="username"
        secureTextEntry={true}
        isRequired={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
        asterik />
      {(passwordIncorret && <p style={{ textAlign: 'center',color: 'red'  }}>
        password or username incorrect
      </p>)}
      <div style={{ margin: 12 }}>

        <button
          onPress={login}
          title="Login"
          color={'pink'}
        />
      </div>
      <div style={{ margin: 12 }}>
        <button
         
          onPress={goToSignUp}
          title="Sign up"
          color={'pink'}
        />
      </div>
    </div>
  );
}


export default Login;