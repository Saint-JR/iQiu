import React from 'react';
import type {Node} from 'react';
import MainPage from './pages/MainPage'
import {View,StatusBar} from 'react-native'

const App: () => Node = () => { 

  return (
    <>
      <StatusBar translucent={true} backgroundColor='rgba(0,0,0,0)'></StatusBar>
      <MainPage/>
    </>
    
  );
};


export default App;
