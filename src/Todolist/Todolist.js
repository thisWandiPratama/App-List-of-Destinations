

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import AddTodo from '../components/AddTodo'

class Todolist extends React.Component{

  state = {
    todos:[],
    visibilityFilter: 'SHOW_ALL_TODOS'
  }

  render(){
    return(
            <View style={{flex:1, paddingTop:15}}>
              <AddTodo/>
              <View>
              </View>
            </View>
      )
    }
  }

  export default Todolist