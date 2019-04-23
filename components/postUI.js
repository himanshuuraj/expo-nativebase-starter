import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from "react-native";
import {
 Image,
 TextInput } from 'react-native';
import { 
 Container,
 Header,
 Content,
 Action,
 Card,
 Footer,
 FooterTab,
 Badge,
 CardItem,
 Thumbnail,
 Text,
 Button,
 Icon,
 Left,
 Right,
 Body,
 Divider } from 'native-base';
import CommentBox from './CommentBox.js';

export default (props) => {
  return (
	  <Card style={{margin:"2%"}}>
  		<CardItem>
    		<Left>
    			<Thumbnail source={{uri: 'http://www.remadays.com/wp-content/uploads/2016/11/Picture_online-2015.jpg'}} />
      		  	<Body>
        		<Text>Madhav</Text>
        		<Text note>April 15, 2016</Text>
      		  	</Body>
    		</Left>
  		</CardItem>
  		<CardItem>
    		<Body>
    			<Text Container style={{
        			paddingBottom:10
      		  	}}>
      		  	How is this possible?! Is there no gravity at Lake Superior?
      		  	</Text>
      		  	{/*
      			  <Image source={{uri: 'https://static.twentytwowords.com/wp-content/uploads/Amazing-Photos-You-Wont-Believe-Actually-Happened-1.jpg'}} style={{height: 200, width: "100%", flex: 1}}/>
       			 */}			
			</Body>
  		</CardItem>
  		<CardItem>
    		<Left>
      			<Button transparent>
        			<Icon active name="thumbs-up" />
        			<Text>12 Likes</Text>
      			</Button>
    		</Left>
    		<Body >
      			<Button transparent onPress={showComment}>
        			<Icon active name="chatbubbles" />
        			<Text >4 Comments</Text>
      			</Button>
    		</Body>
    		<Right>
      			 <Text>11h ago</Text>
    		</Right>
    	</CardItem>
		<CardItem style={{marginBottom: 0, marginTop: 0,}}>
    		<Icon active name = "add" style = {{width: '7.5%'}}/>
  			<TextInput
      			  placeholder="Add a comment"
      			  multiline={true}
    			  onChangeText = {(text) => {
  					  this.setState({input: text})
    			  }}
      			style = {{marginRight: 20, width: '80%'}}
    		/>
    		<Icon style = {{width: '7.5%'}} active name = "send"  onPress={this.handleSendPress(this.state.input)}/>
  		</CardItem>
  		<CardItem>
  			<CommentBox disable={this.state.show} _in = {this.state.input}/>
  		</CardItem>
	</Card>
)};