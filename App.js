import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/login";
import FontAwesome from "./node_modules/@expo/vector-icons/fonts/FontAwesome.ttf";
import MaterialIcons from "./node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf";

import { Font, AppLoading } from "expo";
import Expo from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    console.log("Hello");
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) return null;
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
