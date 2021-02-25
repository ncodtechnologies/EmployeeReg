import React from 'react';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
      container: {
          flex: 1,
          height:'100%',
          width:'98%',
          backgroundColor:'#f2f2f2',
          paddingHorizontal:5,
          paddingVertical:10,
          alignItems:'center',
          justifyContent:"center"
          },
      viewInputbox:{
        flex:0,
        flexDirection:'row',
         padding:5,
        width:'80%',
        height:'55%',
        borderWidth:1,
        borderColor:'#bfbfbf',
        borderRadius:25,
        justifyContent:"space-between",
       alignItems:"center",
       position:"absolute",
       top:35
        },
      viewInputArea:{
       flex:1,
       height:'50%',
       alignItems:'center',
       justifyContent:"space-around",
       marginBottom:10
        },
      iconview:{
              backgroundColor:'#e0dcdb',
              borderRadius:15,
              height:30,
              width:30,
              alignItems:'center',
              justifyContent:"center"
            },
      txt:{
         backgroundColor:'#f2f2f2',
           position:"absolute",
            top:30,
            paddingHorizontal:5,
            left:-105
              },
      viewAgree:{
                flexDirection:'row',
                paddingBottom:20,
                alignItems:"center"
                 
              },
      viewLogin:{
                flexDirection:'row',
                justifyContent:"center",
                paddingTop:20
              },
  
      txtCreateAccount:{
            fontWeight:"bold",
             fontSize:25,
              alignItems:"center",
              textAlign:"center",
              paddingTop:30
              },
      viewbtn:
             {
               width:'80%',
                height:45,
                 backgroundColor:'#0000b3',
                 borderRadius:25,flexDirection:'row',                                     alignItems:"center",
                 justifyContent:"center"
                 },
      txtbtn:  {
                 color:'#ffffff',
                 fontWeight:"bold"
                }
     
});
export default styles;