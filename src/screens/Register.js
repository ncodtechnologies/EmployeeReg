import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../components/styles';
import InputBox from '../components/txtInput';
import {useState} from 'react';

export default function App() {

  const [name, setName] = useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [cPassword,setCpassword]=useState("");


  const Save = () => {
    alert(name);
    try { 
      fetch("https://602b5a2fef26b40017f1423a.mockapi.io/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            password,
          }),
      });   
    }catch (e) {}
  }

  return (
      <View style={styles.container}>
       <Text style={styles.txtCreateAccount}>Create Account</Text>
      <InputBox value={name} setValue={setName}  />
      <InputBox  value={email} setValue={setEmail} />
      <InputBox  value={phone} setValue={setPhone}/>
      <InputBox  value={password} setValue={setPassword}/>
      <InputBox  value={cPassword} setValue={setCpassword}/>
      <View style={styles.viewAgree}>
      
       <Text style={{color:'#8c8c8c'}}>Agree With</Text>
       <Text style={{fontWeight:"bold"}}> Terms & Conditions</Text>
      </View>


    <TouchableOpacity 
      onPress={()=>{
        Save()
      }}style={styles.btnSubmit} ><Text style={styles.txtBtnCreate}>Create Account</Text></TouchableOpacity>

    <View style={styles.viewLogin}>
     
       <Text style={{color:'#8c8c8c'}}>Already have an account? </Text>
       <Text style={{fontWeight:"bold"}}> Login</Text>
      </View>
</View>
      


     
  );
}