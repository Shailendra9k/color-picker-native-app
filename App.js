import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.defaultText}>React</Text>
        <Text style={[styles.defaultText, styles.selectedText]}>Node</Text>
        <Text style={styles.defaultText}>JS</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0984e3",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  },
  defaultText: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    padding: 10,
    margin: 5,
    color: "#2d3436",
    borderWidth: StyleSheet.hairlineWidth
  },
  selectedText: {
    backgroundColor: "#ffeaa7",
    color: "#d63031",
    fontWeight: "bold",
    alignSelf: "flex-end"
  }
});
