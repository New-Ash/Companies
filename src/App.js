import React from 'react';
import './resources/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Featured from './featured/index';

const  App=()=> {
  return (
    
    <div className="App">
      <Header></Header>
      
      <Featured></Featured>
      
      
      <Footer></Footer>
    </div>
  );
}

export default App;
