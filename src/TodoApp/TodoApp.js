

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import AddTodo from '../components/AddTodo'
import VisibleTodos from '../containers/VisibleTodos'

class Todolist extends React.Component{



  render(){
    return(
            <View style={{flex:1, paddingTop:15}}>
              <AddTodo/>
              <View>
                <VisibleTodos/>
              </View>
            </View>
      )
    }
  }

  export default Todolist