/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { Text, TextInput, View, Button, ButtonProperties } from "react-native";
import MainMenu from "./components/mainMenu.js";
import axios from "axios"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "main",
      taskData: [],
    };
    this.toggleConfig = this.toggleConfig.bind(this);
    this.toggleDay = this.toggleDay.bind(this);
    this.toggleMain = this.toggleMain.bind(this)
  }

  componentDidMount() {
    axios.get('http:0.0.0.0:8080/getDailyTasks').then(result => {
      this.setState({
        taskData: result.data
      })
    }).then(() => { console.log(this.state.taskData) })
  }

  toggleConfig() {
    this.setState({
      currentView: "config"
    });
  }

  toggleDay() {
    this.setState({
      currentView: "day"
    });
  }

  toggleMain() {
    this.setState({
      currentView: "main"
    });
  }

  render() {
    if (this.state.currentView === "main") {
      return (
        <View style={{ padding: 5, flex: 1 }}>
          <MainMenu
            toggleConfig={this.toggleConfig}
            toggleDay={this.toggleDay}
          />
        </View>
      );
    }
  }
}
