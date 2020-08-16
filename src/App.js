import React from 'react';
import './App.css';
import Header from './components/header';
import PasswordGenerator from './containers/password-generator';

function App() {
  return (
    <div className="App">
       <Header />
       <PasswordGenerator />
    </div>
  );
}

export default App;
