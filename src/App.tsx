import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './pages/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<MyComponent name="Jai Krishna Verma" num={10} isLoggedIn={true}/>
      </header>
    </div>
  );
}

export default App;
