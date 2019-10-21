import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,

} from 'react-native';


class AddTodo extends React.Component{

  render(){
    return(
        <View style={{flexDirection:'row', marginHorizontal: 20}}>
            <TextInput
              placeholder ='Add Your Target'
              style = {{ borderWidth: 1, borderColor:'#f2f2e1',backgroundColor:'#eaeaea',
              height: 50, flex:1, padding: 5}}
            />

            <TouchableOpacity onPress= { () => alert('add to list') }>
                <View style={{height: 50, backgroundColor:'#eaeaea', alignItems:'center', justifyContent:'center'}}>
                    <Text>Add</Text>
                </View>
            </TouchableOpacity>
        </View>
      )
    }
  }


  export default AddTodo

