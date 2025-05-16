import { TouchableOpacity, StyleSheet, View, Text ,KeyboardAvoidingView} from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {db,doc, updateDoc,deleteDoc} from '../firebase/index';


const ShoppingItem = ({ data ,getItems}) => {
  const [isChecked,setIsChecked] = useState(data.isChecked);

  useEffect(()=>{
  updateCheck()
  },[isChecked])

const updateCheck = async () => {
  const checkRef = doc(db, "todoList", data.id);
  await updateDoc(checkRef, {
    isChecked: isChecked
  });
}

const deleteItem = async() => {
  await deleteDoc(doc(db, "todoList", data.id));
  getItems();
}
 

  return (
    <View style={styles.outerShadow}>
      <View style={styles.innerContainer}>
        {/* Check icon */}
        <TouchableOpacity style={styles.icon} onPress= {()=> setIsChecked(!isChecked)}>
          {isChecked ?  <AntDesign name="checkcircle" size={22} color="black" />:
           <AntDesign name="checkcircleo" size={22} color="#7b8ca0" />
          } 
        </TouchableOpacity>

        {/* item title */}
        <Text style={styles.title} numberOfLines={1}>
          {data.title}
        </Text>

        {/* delete button */}
        <TouchableOpacity style={styles.icon} onPress = {deleteItem}>
          <MaterialCommunityIcons name="delete-outline" size={22} color="#7b8ca0" />
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
 outerShadow: {
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f1f3f6',
    shadowColor: '#d1d9e6',
    shadowOffset: { width: -1, height: -1 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#f1f3f6',
    shadowColor: '#ffffff',
    shadowOffset: { width: -6, height: -6 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  title: {
    flex: 1,
    marginHorizontal: 16,
    fontSize: 17,
    color: '#333',
    fontWeight: '600',
  },
  icon: {
   padding: 6,
    borderRadius: 50,
    backgroundColor: '#f1f3f6',
    shadowColor: '#fff',
    shadowOffset: { width: -8, height: -8 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
  
})

export default ShoppingItem;