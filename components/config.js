/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";
import { Text, TextInput, View, Button, StyleSheet, FlatList, ActionSheetIOS } from "react-native";
import axios from 'axios';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: 40,
  },
  title: {
    fontSize: 36,
    color: '#ffd19a',
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
    flex: 3
  },
  inputArea: {
    flex: 3,
    paddingBottom: 10
  },
  instructions: {
    fontSize: 12,
    color: "#b0deff",
  },
  titleView: {
    flex: 1
  }
});
class Config extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      weather: "whatever",
      days: "every day"
    }
    this.changeWeather = this.changeWeather.bind(this);
    this.dayPicker = this.dayPicker.bind(this);
    this.sendTask = this.sendTask.bind(this);
  }

  changeWeather() {
    this.state.weather === "whatever"
      ? this.setState({ weather: "rainy" })
      : this.setState({ weather: "whatever" });
  }

  dayPicker() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ["every day", "weekdays", "weekends", "cancel", "delete"],
      cancelButtonIndex: 3,
      destructiveButtonIndex: 4
    }, (buttonIndex) => {
      if (buttonIndex === 3) {
        return null
      }
      let options = ["every day", "weekdays", "weekends", "cancel"];
      let newVal = options[buttonIndex]
      this.setState({ days: newVal })
    }
    )
  }

  sendTask() {
    if (this.state.text === "") return null;
    axios.post('http://0.0.0.0:8080/addTask', {
      task: this.state.text,
      weather: this.state.weather,
      days: this.state.days
    })
      .then((response) => { console.log(response.body) });
  }

  render() {
    return (
      <View style={styles.mainView} >
        <View style={styles.titleView}>
          <Text style={styles.title}>Configuration</Text>
          <Text style={styles.instructions}>
            <Text>View and delete your tasks below </Text>
            <Text>
              Use the form at the bottom to add a task with your chosen
              conditions
            </Text>
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
                </View>
              );
            }}
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.subheading}>I want to:</Text>
          <TextInput
            value={this.state.text}
            placeholder="Add a routine"
            placeholderTextColor='#b0deff'
            onChangeText={(text) => this.setState({ text })}
            style={styles.text}
          />
          <Text style={styles.subheading}>I want to do this:</Text>
          <Text style={styles.text} onPress={this.dayPicker}>{this.state.days}</Text>
          <Text style={styles.subheading}>Only when the weather is:</Text>
          <Text style={styles.text} onPress={this.changeWeather}>{this.state.weather}</Text>
          <Button title="Add routine" color="#b0deff" onPress={this.sendTask} />
        </View>
      </View>
    );
  }
}

export default Config;
