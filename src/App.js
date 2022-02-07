import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
import Home from './views/Home/Home';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Sidebar/Main'
import Contacts from './views/Contacts/Contacts'
import Chat from './views/Chat/Chat'
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from './components/Header/Header';
const client = new ApolloClient({
  uri: 'http://ec2-3-91-161-227.compute-1.amazonaws.com:5000/graphql',
  cache: new InMemoryCache()
});


export default function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return(
    <ApolloProvider client={client}>  
      <div className="App">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        {/* { isLoggedIn && <Sidebar className="sidebar"/>} */}
        <Content>
            <Routes>
              <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Home />} />
              <Route path="/main" element={<Main />}/>
              <Route path="/contacts" element={<Contacts />}/>
              <Route path="/chat" element={<Chat />}/>
            </Routes>
        </Content>
      </div>
    </ApolloProvider>
 );
}
 
