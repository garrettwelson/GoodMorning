/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { Text, TextInput, View, Button, ButtonProperties } from "react-native";

export default class GoodDay extends Component {
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
      currentView: value
    })
  }

  render() {
    return (
      
    );
  }
}
