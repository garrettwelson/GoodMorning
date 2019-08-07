/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { Text, TextInput, View, Button, ButtonProperties } from "react-native";
import MainMenu from "./components/mainMenu.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "main",
      taskData: [],
      weatherData: []
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(value) {
    this.setState({
      currentView: "main"
    });
  }

  render() {
    if (this.state.currentView === "main") {
      return (
        <View style={{ padding: 5, flex: 1 }}>
          <MainMenu changeView={this.changeView} />
        </View>
      );
    }
  }
}
