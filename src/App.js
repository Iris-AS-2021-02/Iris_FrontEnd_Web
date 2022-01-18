import { Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import Home from './components/Home.js';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://ec2-3-91-161-227.compute-1.amazonaws.com:5000/graphql',
  cache: new InMemoryCache()
});


export default function App() {

  return(
    <ApolloProvider client={client}>  
     <div className="App">
      <Routes>
        <Route path="/login" component={<Login />} />
        <Route path="/signup" component={<SignUp />} />
        <Route path="/home" component={<Home />} />
      </Routes>
    </div>
    </ApolloProvider>
 );
}
 
