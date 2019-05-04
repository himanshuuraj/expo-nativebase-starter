import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, StatusBar, TouchableOpacity } from "react-native";

import AjaxResponse from './ajaxResponse.js';

export default class Post extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { text: '' };
		this.state = {
		      newValue: '',
		      height: 40,
			
			  userName: 'havmad',
			  postText: '',
			  imageUrl: "http://www.remadays.com/wp-content/uploads/2016/11/Picture_online-2015.jpg",
			  dataX: {},
			  data: {},
		};
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
		   if(t === undefined) {
			alert("Please type something");
		   } else if (this.state.text.length > 0){
		  	  this.setState({
				  data: {
		  			method: 'POST',
		  			headers: {
		      		  Accept: 'application/json',
		      		  'Content-Type': 'application/json',
		  		  },
		  		body: JSON.stringify({
			  	  "userId": "USaa363ade6cb211e9b4f90d11e70f0c7d",
			  	  "text": t,
			  	  "imageList": [{
				  	"image": {
					  	"imageUrl": "This is imagUrl"
				  	}
			  	}],
			 	 "commentList": [{
				  	"text": "flasjto",
				  	"commentList": null,
				  	"image": null
			  	}]
		    }),	  
		  },
		}, () => {
				AjaxResponse.postData(this.state.data)
				.then((response) => {
					  this.setState({dataX: response});
					  console.log('responseData', this.state.dataX);
					  this.props.restApiResponseData(this.state.dataX);
				  }); 
				  // this.insertPost();
				  this.setState({text: ''})
			  });
		  }
	  }
	  
  	insertPost() {
		const data = {
		  method: 'POST',
		  headers: {
		      Accept: 'application/json',
		      'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			  "userId": "USaa363ade6cb211e9b4f90d11e70f0c7d",
			  "text": this.state.postText,
			  "imageList": [{
				  "image": {
					  "imageUrl": "This is imagUrl"
				  }
			  }],
			  "commentList": [{
				  "text": "flasjto",
				  "commentList": null,
				  "image": null
			  }]
		    }),	  
		  }
		fetch('http://192.168.43.252:9090/insertPost',
			data)
		.then(res => res.json())
		.then(json => {
			this.props.restApiResponseData(json);
			console.log('from fetch ', json);
		})
		.catch(error => console.error('Getting Error for fetch function', error));
  	}
	  
	createPostObject = () => {
		  this.textInput.clear();
		  console.log("hey mn;lnfs;kdfnsaofjhweornworf");
		  const data = {
			method: 'POST',
			headers: {
			Accept: 'application/json',
					'Content-Type': 'application/json',
		  	},
			body: JSON.stringify(
				{
					'name' : 'havmad',
					'image' : this.state.imageUrl,
					'text': this.state.postText,
	  	  		}
			),
	  	}
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