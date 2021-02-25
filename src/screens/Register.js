import * as React from 'react';
import {CheckBox,Text, View, StyleSheet ,Button} from 'react-native';
import styles from '../components/styles';
//import { Ionicons } from '@expo/vector-icons';
const InputBox=()=>{
  return(
    <View style={styles.viewInputArea}>
    <View style={styles.viewInputbox}>
    
      <TextInput></TextInput>
        <View style={styles.iconview}> 
          {/* <Ionicons name="md-checkmark-circle" size={15}                           color="#2212e2" /> */}
          </View>
      </View>
     <View  style={styles.txt}>
      <Text>Full Name</Text>
    </View>
    

     
    </View>
  )

}
export default InputBox;