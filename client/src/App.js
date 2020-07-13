import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavBar from './components/AppNavBar';
import ShppingList from './components/ShppingList';
import './App.css';
import {Provider} from 'react-redux';
import store  from './store'
import { Container } from 'reactstrap';
import  ItemModel  from './components/ItemModel';



function App() {
  return (
    <Provider store={store}>
      <div>
     <AppNavBar/>
     <Container>
     <ItemModel/>
     <ShppingList/>
     </Container>
    </div>
    </Provider>
    
  );
}

export default App;
