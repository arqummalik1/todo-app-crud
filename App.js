import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import ShoppingItem from "./components/ShoppingItem";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
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
      <TextInput placeholder="Type your item" style={styles.input} />
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
  input: {
    backgroundColor: "#f2f5fa",
    padding: 20,
    fontSize: 15,
    width: "90%",
    alignSelf: "center",
    marginTop: "auto",
    borderRadius: 10,
  },
});
