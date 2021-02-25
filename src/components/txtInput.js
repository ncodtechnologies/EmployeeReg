import React from 'react';
import {Text,View,TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'
const InputBox=(props)=>{
  return(
    <View style={styles.viewInputArea}>
    <View style={styles.viewInputbox}>
    
      <TextInput></TextInput>
        <View style={styles.iconview}> 
          <Ionicons name={props.icon} size={15}                           color="#2212e2" />
          </View>
      </View>
     <View  style={styles.txt}>
      <Text style={{fontSize:12}}>{props.name}</Text>
    </View>
    

     
    </View>
  )

}
export default InputBox;



