

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Todolist from './src/Todolist/Todolist'

import store from './src/store'
import {Provider} from 'react-redux'

class App extends React.Component{

  render(){
    return(
      <Provider store={store}>
         <Todolist/>
      </Provider>
      )
    }
  }


  export default App

