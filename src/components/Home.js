import { useState } from 'react';
import React from 'react';
import { graphql } from '@apollo/react-hoc';
import { gql, useQuery } from '@apollo/client';
import './Home.css';


const Home = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, data } = useQuery(gql`
  query {
    usersByNumber(number : "${username}") {
      Name
      Number
    } 
  },
  `);


  const isVerifiedUser= () =>{
    return data.usersByNumber.Name === password;
  }

  const login = () =>{
    if(isVerifiedUser()){
      
    }
  }
  const goToSignUp = () => {
    console.log(username);
    console.log(password);
    navigation.navigate('SignUp');
  }
  return (
    <h1 >
     
          WELCOME HOME!
     
    </h1>
  );
}


export default Home;