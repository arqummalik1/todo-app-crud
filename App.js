import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React ,{useState}from "react";
import ShoppingItem from "./components/ShoppingItem";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {app,db,collection,addDoc,getFirestore} from './firebase/index'
import Ionicons from '@expo/vector-icons/Ionicons';

const App = () => {
  const [title,setTitle] = useState('');

  const addShoppingItem = async()=>{
    try {
      const docRef = await addDoc(collection(db, "todoList"), {
        title : title,
        isChecked : false,
       // id : 0
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Shopping List</Text>
        <Text style={styles.noOfItems}>3</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="delete-sweep" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ShoppingItem />
      <ShoppingItem />
      <ShoppingItem />
      <ShoppingItem />
      <ShoppingItem />
      <ShoppingItem />

      {/* Text input */}
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Type your item"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
         onSubmitEditing={addShoppingItem}
        />
        <TouchableOpacity onPress={addShoppingItem}>
        <Ionicons name="enter-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    width: "96%",
    alignSelf: "center",
    padding: 15,
    justifyContent: "space-between",
    // backgroundColor:"#ae5",
    alignItems: "center",
    // marginHorizontal:10
  },
  heading: {
    fontSize: 30,
    fontWeight: 200,
    flex: 1,
  },
  noOfItems: {
    fontSize: 22,
    marginRight: 20,
    fontWeight: 200,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#e8effa',
    borderWidth: 1,
    borderRadius: 26,
    paddingHorizontal: 10,
    marginTop:"auto",
    margin : 10
  },
  input: {
    flex: 1,
    height: 60,
    padding : 10
  },
});
