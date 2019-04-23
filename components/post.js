import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, StatusBar, TouchableOpacity } from "react-native";

export default class Post extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { text: '' };
		this.state = {
		      newValue: '',
		      height: 40,
		}
	}
	
	componentDidMount() {
	       StatusBar.setHidden(true);
	}
	
	updateSize = (height) => {
	    this.setState({
	      height
	    });
	  }
	  
	  handleClick = () => {
		  let t = this.state.text;
		  if(t==undefined) {
			alert("Please type something");
		  } else {
		  	alert(t);
		  }
		  this.textInput.clear();
	  }
	  
	render () {
		const {newValue, height} = this.state;

		    let newStyle = {
		      height
		    }
		return(
			<View style={styles.container}>
				
			<TextInput
			ref={input => { this.textInput = input }}
			multiline = {true}
			numberOfLines = {4}
	        placeholder = "Something in Mind"
			placeholderTextColor="black"
			onChangeText={(typedText) => {
				this.setState({text: typedText});
			}}
			value={this.state.text}
			onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
	      	/>
			<Button 
			title="Post"
  		  	color="grey"
  		  	accessibilityLabel="Learn more about this purple button"
			onPress={this.handleClick}>
			</Button>
			</View>
		)
	};
}

const styles = StyleSheet.create({
	container: {
		margin: '2%',
	},
	textInputStyle: {
		textAlignVertical: 'top',
	},
});