import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from './header';
const client = new ApolloClient({
  uri: 'http://ec2-3-91-161-227.compute-1.amazonaws.com:5000/graphql',
  cache: new InMemoryCache()
});


export default function App() {

  return(
    <ApolloProvider client={client}>  
     <div className="App">
     <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </ApolloProvider>
 );
}
 
