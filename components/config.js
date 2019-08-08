/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";
import { Text, TextInput, Switch, View, Button, StyleSheet, FlatList, Picker, ActionSheetIOS } from "react-native";
import { white, red } from "ansi-colors";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 40,
  },
  title: {
    fontSize: 36,
    color: '#ffd19a'
  },
  subheading: {
    fontSize: 24,
    color: '#ffc5a1'
  },
  text: {
    fontSize: 18,
    color: '#b0deff'
  },
  currentItems: {
    flex: 2
  },
  inputArea: {
    flex: 3,
    paddingBottom: 10
  },
  instructions: {
    fontSize: 12,
    color: '#b0deff',
  },
  deleteButton: {

  }
});
class Config extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      onRain: false,
      days: "every day"
    }
    this.changeRain = this.changeRain.bind(this);
    this.dayPicker = this.dayPicker.bind(this)
  }

  changeRain() {
    let conditions = this.state.onRain;
    this.setState({
      onRain: !conditions
    })
  }

  dayPicker() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ["every day", "weekdays", "weekends", "cancel"],
      cancelButtonIndex: 3
    }, (buttonIndex) => {
      let options = ["every day", "weekdays", "weekends", "cancel"];
      let newVal = options[buttonIndex]
      this.setState({ days: newVal })
    }
    )
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
            keyExtractor={(item, index) => `${item}_${index}`}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text style={styles.text} key={`${item._id}`}>
                    {item.task}
                  </Text>
                  <Button style={} title="delete" />
                </View>
              )
            }}
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.subheading}>Add New Task</Text>
          <TextInput
            value={this.state.text}
            placeholder="Type a task"
            placeholderTextColor='#b0deff'
            onChangeText={(text) => this.setState({ text })}
            style={styles.text}
          />
          <Text style={styles.subheading}>I want to do this:</Text>
          <Button
            style={styles.text}
            onPress={this.daypicker}
            title={this.state.days}
          />
          <Switch
            value={this.state.onRain}
            onChange={this.changeRain}
          />
        </View>
      </View >
    );
  }
}

export default Config;
