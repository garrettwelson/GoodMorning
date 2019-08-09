/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { View } from "react-native";
import MainMenu from "./components/mainMenu.js";
import DayView from "./components/day.js";
import Config from "./components/config.js";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "main",
      taskData: [],
      allTasks: [],
      counter: 0,
    };
    this.toggleConfig = this.toggleConfig.bind(this);
    this.toggleDay = this.toggleDay.bind(this);
    this.toggleMain = this.toggleMain.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
    this.toggleCounter = this.toggleCounter.bind(this);
  }

  componentDidMount() {
    this.updateTasks();
  }

  toggleCounter() {
    let newCounter = this.state.counter += 1
    this.setState({
      counter: newCounter
    })
  }
  updateTasks() {
    axios
      .get("http://0.0.0.0:8080/getDailyTasks")
      .then(result => {
        this.setState({
          taskData: result.data
        });
      })
      .then(() => {
        axios.get("http://0.0.0.0:8080/getAllTasks").then(result => {
          this.setState({
            allTasks: result.data
          });
          console.log(this.state.allTasks);
        });
      });
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
        <View style={{ flex: 1 }}>
          <MainMenu
            toggleConfig={this.toggleConfig}
            toggleDay={this.toggleDay}
          />
        </View>
      );
    } else if (this.state.currentView === "day") {
      return (
        <View style={{ padding: 5, flex: 1, backgroundColor: "#0A101C" }}>
          <DayView
            taskData={this.state.taskData}
            toggleMain={this.toggleMain}
            toggleCounter={this.toggleCounter}
            counter={this.state.counter}
          />
        </View>
      );
    } else if (this.state.currentView === "config") {
      return (
        <View style={{ padding: 5, flex: 1, backgroundColor: "#0A101C" }}>
          <Config
            taskData={this.state.allTasks}
            toggleMain={this.toggleMain}
            updateTasks={this.updateTasks}
          />
        </View>
      );
    }
  }
}
