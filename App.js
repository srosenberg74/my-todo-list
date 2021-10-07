import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  Pressable,
} from "react-native";

export default function App() {
  const [items, setItems] = useState([
    { todo: "first item" },
    { todo: "second item" },
  ]);

  const [text, onChangeText] = useState("");

  const addItemToList = () => {
    if (text.length > 0 && isNaN(text)) {
      setItems([...items, { todo: text }]);
      onChangeText("");
    }
  };

  const generateList = items.map((item, index) => (
    <View key={index} style={styles.listItem}>
      <MyCheckbox number={index} />
      <View style={styles.textArea}>
        <Text style={styles.itemText}>{item.todo}</Text>
      </View>
    </View>
  ));

  function MyCheckbox(props) {
    const number = props.number;

    function onCheckmarkPress() {
      setItems(items.filter((value, i) => i !== number));
    }
    return (
      <Pressable
        style={[styles.checkboxBase]}
        onPress={onCheckmarkPress}
      ></Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To Do's</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.innerScroll}>{generateList}</View>
      </ScrollView>
      <TextInput
        className="textInput"
        style={styles.textInput}
        onChangeText={onChangeText}
        value={text}
        autoFocus={true}
        placeholder="Type new entry here"
        onSubmitEditing={addItemToList}
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
    color: "gray"
  },
  heading: {
    fontWeight: "bold",
    fontSize: "4rem",
    paddingBottom: "2rem",
    marginTop: "2rem",
    height: "20vh",
    color: "gray"
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
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "darkgray",
    backgroundColor: "transparent",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "80vw",
    height: "10vh",
    maxWidth: 500,
    border: "2px solid darkgray",
    padding: 20,
    borderRadius: 10,
    fontSize: "1.5rem",
    marginBottom: "2rem",
    boxShadow: '3px 3px 8px darkgray',
  },
  itemText: {
    fontSize: "1.5rem",
    paddingLeft: "2rem",
    color: "gray"
  },
  textArea: {
    textAlign: "center",
  },
});

// // function ListItem(props) {
// //   return(
// //   <Text style={styles.listItem}>{props.item.todo}</Text>
// //   )
// // };

// // const generateList = items.map((item, index) => (
// //   <View key={index}>
// //       <ListItem
// //       item = {item}
// //       />
// //     </View>

// // )
// // );

// const [checkboxIndex, setCheckBoxIndex] = useState(null);

// const ref_input = useRef();

//  const [focus, setFocus] = useState(true);

/* <Ionicons name="checkmark" size={24} color="white" /> */

// checkboxChecked: {
//   backgroundColor: "white",
// },

// checkboxLabel: {
//   marginLeft: 8,
//   fontWeight: 500,
//   fontSize: 18,
// },

// const handleKeyPress = (e) => {
//   if (e.nativeEvent.key === "Enter") {
//     addItemToList();
//   }
// };

// onKeyPress={(e) => handleKeyPress(e)}
// ref={ref_input}

// onSubmitEditing={()=>ref_input.current.focus()}

// listItem: {
//   border: "2px solid red",
//   borderRadius: "10px",
//   padding: "1rem",
//   margin: "1rem",
//   width: "80vw",
//   fontSize: "1.5rem",
//   textAlign: "center",
//   backgroundColor: "white",
//   maxWidth: 400,
// },

// const [checked, onChange] = useState(false);

// onChange(!checked);

// console.log(items.splice(number, 1));

// () => setFocus(true);
// () => ref_input.current.focus();

// const [focus, setFocus] = useState(true);
// import { Ionicons } from "@expo/vector-icons";

// contentContainerStyle={{ alignItems: "center" }}  //was in scrollview

// console.log(number);
