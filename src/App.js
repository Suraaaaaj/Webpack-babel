import React from 'react';
import Header from './components/header/Header';
import './App.sass';
import Animal from './components/animal/Animal';
import Bird from './components/bird/Bird';
const App = function (){
 
  return(
        <div className='my-app'>
            <Header />
            <Animal />
            <Bird />
        </div>
        
    
   
  );
 }

export default App