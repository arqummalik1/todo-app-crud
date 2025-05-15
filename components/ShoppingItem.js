import { TouchableOpacity, StyleSheet, View,Text } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ShoppingItem = ({data}) => {
 
  return (
    <View style= {styles.container}>
     {/* Check icon */}
     <TouchableOpacity>
     <AntDesign name="checkcircleo" size={24} color="black" />
     </TouchableOpacity>
     {/* item name */}
     <Text style={styles.title}>{data.title}</Text>
     
     {/* delete button */}
     <TouchableOpacity>
     <MaterialCommunityIcons name="delete-empty" size={18} color="#121212" />
     </TouchableOpacity>
    </View>
  )
}

export default ShoppingItem

const styles = StyleSheet.create({
   container :{
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor:"#e8effa",
    padding:10,
    alignItems:"center",
    margin:5,
    borderRadius:10,
    marginHorizontal:10
   },
   title :{
    flex:1,
    color : "#000",
    fontSize:16,
    fontWeight:500,
    padding:5,
    marginLeft:20
   }
})