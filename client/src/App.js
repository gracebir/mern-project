import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavBar from './components/AppNavBar';
import ShppingList from './components/ShppingList';
import './App.css';
import {Provider} from 'react-redux';
import store  from './store'


function App() {
  return (
    <Provider store={store}>
      <div>
     <AppNavBar/>
     <ShppingList/>
    </div>
    </Provider>
    
  );
}

export default App;
