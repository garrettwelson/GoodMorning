/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";
import { white, red } from "ansi-colors";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 40
  },
  title: {
    fontSize: 48,
    color: '#ECA400'
  },
  subheading: {
    fontSize: 36,
    color: '#006992'
  },
  task: {
    fontSize: 24,
    color: '#001D4A'
  },
  currentItems: {
    flex: 2
  },
});
const Config = props => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.title}>Configure your tasks</Text>
      <Text style={styles.subheading}>Current Tasks</Text>
      <FlatList
        style={styles.currentItems}
        data={props.taskData}
        renderItem={(({ item }) => <Text style={styles.task}>{item.task}</Text>)}
      />
      <Button onPress={props.toggleMain} title="Go home" />
    </View>
  );
};

export default Config;