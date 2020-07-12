import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavBar from './components/AppNavBar';
import ShppingList from './components/ShppingList';
import './App.css';


function App() {
  return (
    <div>
     <AppNavBar/>
     <ShppingList/>
    </div>
  );
}

export default App;
