/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";
import { Text, View, Button, ButtonProperties, StyleSheet } from "react-native";
import { white, red } from "ansi-colors";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    fontSize: 36,
    padding: 5,
    backgroundColor: "red"
  }
});
const MainMenu = props => {
  return (
    <View style={styles.mainView}>
      <Text>Text</Text>
      <Button
        onPress={props.toggleDay}
        title="Start The Day"
        value="start"
        accessibilityLabel="Button to start the day"
        style={styles.button}
      />
      <Button
        onPress={props.toggleConfig}
        title="Configure Routine"
        value="config"
        accessibilityLabel="Button to configure routine"
        style={styles.button}
      />
    </View>
  );
};

export default MainMenu;
