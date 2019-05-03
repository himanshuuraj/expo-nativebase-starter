import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from "react-native";
import {
 Image,
 TextInput,
 StyleSheet } from 'react-native';
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
 Divider, } from 'native-base';
import CommentBox from './CommentBox.js';
import Post from './post.js';

export default class postUI extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			input: '',
			commentVisibility: false,
			data: '',
		}
	}
	
	showComment = () => {
		this.setState({
			commentVisibility: true,
		})
		console.log(this.props.k)
	}
	
	render() {
		return (
			  <Card key={this.props.k} style={styles.cardStyle}>
              <CardItem style={{flexwrap: 'wrap'}} header bordered>
                <Left>
                <Thumbnail source={{uri: 'http://www.remadays.com/wp-content/uploads/2016/11/Picture_online-2015.jpg'}} />
                  <Body>
                    <Text>Madhav</Text>
                    <Text note>April 15, 2016</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem style={{flexwrap: 'wrap'}} bordered>
                <Body>
				
                <Text>
				{this.props.k.body.text}
                  </Text>
                  {/*
                  <Image source={{uri: 'https://static.twentytwowords.com/wp-content/uploads/Amazing-Photos-You-Wont-Believe-Actually-Happened-1.jpg'}} style={{height: 200, width: "100%", flex: 1}}/>
                   */}
                  </Body>
              </CardItem>
              <CardItem bordered>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body >
                  <Button transparent onPress={this.showComment}>
                    <Icon active name="chatbubbles" />
                    <Text >4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
			  </CardItem>
				{ this.state.commentVisibility &&
					(<CardItem>
					 	<Icon active name = "add" style = {styles.iconWidthStyle}/>
					 	<TextInput
					 	placeholder="Add a comment"
					 	multiline={true}
					 	onChangeText = {(text) => {
					 		this.setState({input: text})
					 	}}
					   	style = {styles.textInputStyle}
					 	/>
					 	<Icon style = {styles.iconWidthStyle} active name = "send"/>
					 	</CardItem>)
				}
				{	this.state.commentVisibility && (
					<CardItem>
				  	<CommentBox disable={this.state.show} _in = {this.state.input}/>
					</CardItem> 
						)
				}
  			</Card>
         
		)
	};
}

const styles = StyleSheet.create({
	cardStyle: {
		margin:"2%",
	},
	textInputStyle: {
		marginRight: 20,
		width: '80%'
	},
	iconWidthStyle: {
		width: '7.5%'
	},
});
	
// <Content style={{marginBottom: '10%'}}>
 // </Content>