/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { white, red } from "ansi-colors";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
const DayView = props => {
  return (
    <View style={styles.mainView}>
      <Text>Here are your tasks</Text>
      {props.taskData.map((task, i) => {
        return <Text key={`task_${i}`}>{task.task}</Text>
      })}
      <Button onPress={props.toggleMain} title="Go home" />
    </View>
  );
};

export default DayView;