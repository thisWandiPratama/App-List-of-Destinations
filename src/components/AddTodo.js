import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,

} from 'react-native';

import {connect} from 'react-redux'
import {addTodo} from '../action'
class AddTodo extends React.Component{
  state = {
    text: ''
  }

  addTodo = (text) => {
    // redux store
    this.props.dispatch(addTodo(text))

    this.setState({text:''})
  }

  render(){
    return(
      <View>
        <View style = {{alignItems:'center', marginBottom:10}}><Text style = {{fontSize:20}}> List of Destinations </Text></View>
          <View style={{flexDirection:'row', marginHorizontal: 20}}>
              <TextInput
                onChangeText= { (text) => this.setState({text}) }
                value = { this.state.text}
                placeholder ='Add Your Target'
                style = {{ borderWidth: 1, borderColor:'#f2f2e1',backgroundColor:'#eaeaea',
                height: 50, flex:1, padding: 5}}
              />

              <TouchableOpacity onPress= { () => this.addTodo(this.state.text) }>
                  <View style={{height: 50, backgroundColor:'#eaeaea', alignItems:'center', justifyContent:'center'}}>
                      <Text>Add</Text>
                  </View>
              </TouchableOpacity>
          </View>
        </View>
      )
    }
  }


  export default connect()(AddTodo)

