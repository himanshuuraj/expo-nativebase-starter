import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./components/signup";
import FontAwesome from "./node_modules/@expo/vector-icons/fonts/FontAwesome.ttf";
import MaterialIcons from "./node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf";

import { Font, AppLoading } from "expo";
import Expo from "expo";
import NameAndPassword from "./components/NameAndPassword";
import Home from "./components/Home";
import Login from "./components/login";
import Post from "./components/post";
import CommentFinal from './components/CommentFinal';
import Shoot from './components/shoot';

export default class App extends React.Component {

  state = {
    loading : true,
    selectedScreen : 'home',
  }

  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    console.log("Hello");
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  moveToScreen = async (screenName) => {
    await this.setState({ 'selectedScreen' : screenName });
    console.log(screenName);
  }

  getScreen = () => {
    switch (this.state.selectedScreen) {
      case 'login':
        return <Login moveToScreen={this.moveToScreen}/>;
      case 'signUp':
        return <SignUp moveToScreen={this.moveToScreen}/>;
      case 'home':
        return <Home moveToScreen={this.moveToScreen}/>;
	  case 'post':
		return <Post moveToScreen={this.moveToScreen}/>;
	  case 'CommentFinal':
		return <CommentFinal moveToScreen={this.moveToScreen}/>;
	  case 'shoot':
		return <Shoot moveToScreen={this.moveToScreen}/>
      default:
        return <CommentFinal moveToScreen={this.moveToScreen}/>;
    }
  }

  render() {
    if (this.state.loading) return null;
    return this.getScreen();
  }
}

