import React from 'react';
import type {Node} from 'react';
import MainNavi from './pages/Navigation/MainNavi'
import {View,StatusBar} from 'react-native'

const App: () => Node = () => { 

  return (
    <>
      <StatusBar translucent={true} backgroundColor='rgba(0,0,0,0)'></StatusBar>
      <MainNavi/>
    </>
    
  );
};


export default App;
