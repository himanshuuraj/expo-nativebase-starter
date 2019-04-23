import React, { Component } from "react";
import { Font, AppLoading } from "expo";

import { 
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
	Image,
	ScrollView,
	Button,
  View} from "react-native";
import PropTypes from 'prop-types';
import Camera from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";


export default class Shoot extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			photos: []
		}
	}
	
	_handleButtonPress = () => {
	   CameraRoll.getPhotos({
	       first: 20,
	       assetType: 'Photos',
	     })
	     .then(r => {
	       this.setState({ photos: r.edges });
	     })
	     .catch((err) => {
	        //Error Loading Images
	     });
	   };
	render() {
	 return (
	   <View>
	     <Button title="Load Images" onPress={this._handleButtonPress} />
	     <ScrollView>
	       {this.state.photos.map((p, i) => {
	       return (
	         <Image
	           key={i}
	           style={{
	             width: 300,
	             height: 100,
	           }}
	           source={{ uri: p.node.image.uri }}
	         />
	       );
	     })}
	     </ScrollView>
	   </View>
	 );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});