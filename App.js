

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import TodoApp from './src/TodoApp/TodoApp'

import store from './src/store'
import {Provider} from 'react-redux'

class App extends React.Component{

  render(){
    return(
      <Provider store={store}>
         <TodoApp/>
      </Provider>
      )
    }
  }


  export default App

