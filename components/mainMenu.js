/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";
import { Text, View, Button, StyleSheet, ImageBackground } from "react-native";


const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  backgroundImg: {
    height: '100%',
    width: '100%',
    flex: 1,
    resizeMode: "stretch"
  },
  button: {
    fontSize: 36,
    padding: 5,
  },
  menuView: {
    marginTop: 60,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    color: '#ffffff',
    fontSize: 60,
    fontFamily: "HelveticaNeue-Bold"
  }
});
const MainMenu = props => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={{ uri: "/Users/gwelson/code/MVP/components/background.jpg" }}
        style={styles.backgroundImg}
      >
        <View style={styles.menuView}>
          <Text style={styles.title}>Good Day</Text>
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
      </ImageBackground>
    </View >
  );
};

export default MainMenu;
