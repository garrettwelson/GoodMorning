/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { white, red } from "ansi-colors";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  nextTaskButton: {
    backgroundColor: '#ff935c',
    marginTop: 25,
    fontSize: 24,
    color: "#f9e090",
    borderColor: '#ff935c',
    borderWidth: 0.5,
    borderRadius: 10
  },
  taskText: {
    color: "#f9e090",
    fontSize: 36,
    padding: 20,
    textAlign: 'center'
  }
});
const DayView = props => {
  let item = props.taskData[props.counter];
  if (!item) {
    return (
      <View style={styles.mainView}>
        <Text style={styles.taskText}>You're done</Text>
        <Text style={styles.taskText}>Have a good day!</Text>
        <Text style={styles.nextTaskButton} onPress={props.toggleMain}>Go back home</Text>
      </View>
    )
  }
  return (
    <View style={styles.mainView}>
      <Text style={styles.taskText}>{item.task}</Text>
      <Text style={styles.nextTaskButton} onPress={props.toggleCounter}>Next task</Text>
    </View>
  );
};

export default DayView;