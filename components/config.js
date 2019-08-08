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
    padding: 40,
    backgroundColor: '#232528'
  },
  title: {
    flex: 1,
    fontSize: 36,
    color: '#FFA400'
  },
  subheading: {
    fontSize: 24,
    color: '#009FFD'
  },
  text: {
    fontSize: 18,
    color: '#EAF6FF'
  },
  currentItems: {
    flex: 3
  },
  instructions: {
    fontSize: 12,
    color: '#EAF6FF',
    flex: 1
  }
});
const Config = props => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.title}>Design your morning</Text>
      <Text style={styles.instructions}>
        View and delete your tasks below. Use the form at the bottom to add a task with your chosen conditions.
      </Text>
      <View style={styles.currentItems}>
        <Text style={styles.subheading}>Current Tasks</Text>
        <FlatList
          data={props.taskData}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return (
              <Text style={styles.text} key={`item_${item._id}`}>
                {item.task}
              </Text>
            )
          }}
        />
      </View>
      <Button onPress={props.toggleMain} title="Go home" />
    </View>
  );
};

export default Config;