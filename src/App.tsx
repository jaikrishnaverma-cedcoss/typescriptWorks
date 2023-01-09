import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './pages/MyComponent';
import { data } from './pages/data';
function App() {
  return (
    <div className="App">
<MyComponent data={data}/>
    </div>
  
  );
}

export default App;
