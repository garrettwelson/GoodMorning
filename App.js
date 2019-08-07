/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { Text, TextInput, View, Button, ButtonProperties } from "react-native";
import MainMenu from "./components/mainMenu.js";
import SQLite from "react-native-sqlite-storage";

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

  componentDidMount() {
    SQLite.DEBUG(true);
    SQLite.enablePromise(true);

    SQLite.openDatabase({
      name: "TestDatabase",
      location: "default"
    }).then(db => {
      console.log("Database open!");
    });
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
