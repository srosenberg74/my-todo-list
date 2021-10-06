import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [items, setItems] = useState([
    { todo: "first item" },
    { todo: "second item" },
  ]);

  const [text, onChangeText] = useState("");

  const addItemToList = () => {
    setItems([...items, { todo: text }]);
    onChangeText("");
  };

  const generateList = items.map((item, index) => (
    <View key={index}>
      <Text style={styles.listItem}>{item.todo}</Text>
    </View>
  ));

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === "Enter") {
      addItemToList();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo's</Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.innerScroll}>{generateList}</View>
      </ScrollView>
      <TextInput
        className="textInput"
        style={styles.textInput}
        onChangeText={onChangeText}
        value={text}
        autoFocus={true}
        placeholder="Type new entry here"
        onKeyPress={handleKeyPress}
      />
      <Button
        style={styles.button}
        color="blue"
        title="Add Item"
        onPress={addItemToList}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem",
    justifyContent: "flex-start",
    textAlign: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: "4rem",
    paddingBottom: "2rem",
    marginTop: "2rem",
    height: "20vh",
  },
  listItem: {
    border: "2px solid red",
    borderRadius: "10px",
    padding: "1rem",
    margin: "1rem",
    width: "80vw",
    fontSize: "1.5rem",
    textAlign: "center",
    backgroundColor: "white",
    maxWidth: 400,
  },
  button: {
    borderRadius: 4,
    color: "red",
  },
  textInput: {
    width: "80vw",
    height: "5vh",
    border: "2px solid rgb(21 71 132 / 40%)",
    marginBottom: "1rem",
    borderRadius: 8,
    backgroundColor: "white",
    textAlign: "center",
    maxWidth: 400,
  },
  scrollView: {
    width: "100%",
    height: "50vh",
  },
  innerScroll: {
    alignItems: "center",
  },
});

// function ListItem(props) {
//   return(
//   <Text style={styles.listItem}>{props.item.todo}</Text>
//   )
// };

// const generateList = items.map((item, index) => (
//   <View key={index}>
//       <ListItem
//       item = {item}
//       />
//     </View>

// )
// );
