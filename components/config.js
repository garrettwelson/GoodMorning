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
    fontFamily: "Helvetica Nueue"
  },
  title: {
    fontSize: 36,
    color: '#ff935c',
  },
  subheading: {
    fontSize: 24,
    color: '#ff935c'
  },
  text: {
    fontSize: 18,
    color: '#f9e090'
  },
  currentItems: {
    flex: 3
  },
  inputArea: {
    flex: 3,
    paddingBottom: 10,
    alignItems: "flex-start",
  },
  instructions: {
    fontSize: 12,
    color: "#f9e090",
  },
  titleView: {
    flex: 1
  },
  submitTask: {
    backgroundColor: '#ff935c',
    marginTop: 25,
    fontSize: 24,
    color: "#f9e090",
    borderColor: '#ff935c',
    borderWidth: 0.5,
    borderRadius: 10
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
      options: ["every day", "weekdays", "weekends", "cancel"],
      cancelButtonIndex: 3
    },
      buttonIndex => {
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
      .then(() => this.props.updateTasks());
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
              let dayLengths = {
                7: 'every day',
                5: 'weekdays',
                2: 'weekends'
              }
              let day = dayLengths[item.days.length];
              let weather;
              (item.rainOnly) ? weather = 'rainy weather' : weather = "any weather"
              return (
                <Text style={styles.text}>
                  {item.task} | {day} | {weather}
                </Text>
              );
            }}
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.subheading}>I want to:</Text>
          <TextInput
            value={this.state.text}
            placeholder="Add a routine"
            placeholderTextColor='#f9e090'
            onChangeText={(text) => this.setState({ text })}
            style={styles.text}
          />
          <Text style={styles.subheading}>I want to do this:</Text>
          <Text style={styles.text} onPress={this.dayPicker}>{this.state.days}</Text>
          <Text style={styles.subheading}>Only when the weather is:</Text>
          <Text style={styles.text} onPress={this.changeWeather}>{this.state.weather}</Text>
          <Text style={styles.submitTask} onPress={this.sendTask}>Add this routine</Text>
        </View>
        <Button
          style={{ paddingTop: 25 }}
          title="Go home"
          color="#f9e090"
          onPress={this.props.toggleMain}
        />
      </View>
    );
  }
}

export default Config;
