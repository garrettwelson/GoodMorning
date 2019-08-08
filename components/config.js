/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";
import { Text, TextInput, Switch, View, Button, StyleSheet, FlatList } from "react-native";
import { white, red } from "ansi-colors";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 40,
    backgroundColor: '#232528'
  },
  title: {
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
    flex: 2
  },
  inputArea: {
    flex: 2
  },
  instructions: {
    fontSize: 12,
    color: '#EAF6FF',
  }
});
class Config extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      weather: "",
      days: []
    }
  }

  render() {
    return (
      <View style={styles.mainView} >
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Design your morning</Text>
          <Text style={styles.instructions}>
            View and delete your tasks below. Use the form at the bottom to add a task with your chosen conditions.
          </Text>
        </View>
        <View style={styles.currentItems}>
          <Text style={styles.subheading}>Current Tasks</Text>
          <FlatList
            data={this.props.taskData}
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
        <View style={styles.inputArea}>
          <Text style={styles.subheading}>Add New Task</Text>
          <TextInput
            value={this.state.text}
            placeholder="Type a task"
            placeholderTextColor='#EAF6FF'
            onChangeText={(text) => this.setState({ text })}
            style={styles.text}
          />
        </View>
        <Button onPress={this.props.toggleMain} title="Go home" />
      </View >
    );
  }
}

export default Config;
