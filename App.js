import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import ShoppingItem from "./components/ShoppingItem";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  app,
  db,
  collection,
  addDoc,
  getFirestore,
  getDocs,
  deleteDoc,
  doc,
} from "./firebase/index";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

const App = () => {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  //  console.log('list',list)

  useEffect(() => {
    getItems();
  }, []);

  const addItem = async () => {
    try {
      const docRef = await addDoc(collection(db, "todoList"), {
        title: title,
        isChecked: false,
        // id : 0
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    getItems();
  };

  const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "todoList"));
    const items = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    // console.log("Items ==>>",items)
    setList(items);
  };

  const delAllItems = async () => {
    const querySnapshot = await getDocs(collection(db, "todoList"));
    querySnapshot.docs.map((item) => deleteDoc(doc(db, "todoList", item.id)));
    getItems();
  };

  const EmptyListComponent = () => (
    <View style={styles.emptyWrapper}>
      <View style={styles.emptyCard}>
        <Ionicons name="document-outline" size={44} style={styles.emptyIcon} />
        <Text style={styles.emptyText}>no items found</Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Neat Notes</Text>
          <Text style={styles.noOfItems}>{list.length && list.length}</Text>
          <TouchableOpacity onPress={delAllItems}>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={list}
          renderItem={({ item }) => (
            <ShoppingItem data={item} getItems={getItems} />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={EmptyListComponent}
        />

        {/* Text input */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Type your item"
            placeholderTextColor="'#f1f3f6'"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            onSubmitEditing={addItem}
          />
          <TouchableOpacity onPress={addItem}>
            <Feather name="arrow-right-circle" size={28} color="#555" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f3f6",
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
    fontWeight: 600,
    flex: 1,
  },
  noOfItems: {
    fontSize: 22,
    marginRight: 20,
    fontWeight: 600,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f3f6",
    borderRadius: 20,
    paddingHorizontal: 15,
    margin: 12,
    borderRadius: 20,
    justifyContent: "center",
    shadowColor: "#ffffff",
    shadowOffset: { width: 1, height: -7 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 8,
  },

  input: {
    flex: 1,
    height: 65,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  emptyWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    top: 100,
  },
  emptyCard: {
    width: "90%",
    height: 180,
    borderRadius: 20,
    backgroundColor: "#f1f3f6",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    marginTop: 16,
    fontSize: 18,
    color: "#7b8ca0",
    fontWeight: "600",
  },
  emptyIcon: {
    fontSize: 64,
    color: "#c1c9d6",
  },
});
