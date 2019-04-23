import React, { Component } from "react";
import { Font, AppLoading } from "expo";
import {
  Container,
  Header,
  Content,
  Text,
  Image,
  Button,
  Form,
  Item,
  Label,
  Thumbnail,
  Input,
  Card,
  CardItem,
  Left,
  Right,
  Footer,
  Body,
  Icon,
  FooterTab, Hyperlink,
} from "native-base";

import { View, StyleSheet } from "react-native";
import PropTypes from 'prop-types';



export default class CommentBox extends React.Component {
	
	static propTypes = {
		show: PropTypes.bool.isRequired,
		_in: PropTypes.string.isRequired,
	};
	
	state = {
		_likes : 0,
	}
	
	handleClick = () => {
		this.setState ({
			_likes: this.state._likes+1
		})
	}
	
	render() {
		if (this.props._in.length > 0) {
			comment = <Text style={styles.TextBoxStyle}>{this.props._in}</Text>
		} else {
			comment = <Text style={styles.TextBoxStyle}>Nothing in here</Text>
		}
		name = <Text style={styles.UserName}>Madhav</Text>
		return(
		<View style={styles.commentBody}>
			<View style={{flex: 1, flexDirection: 'row', height: 25}}>
			<Thumbnail style={styles.ThumbnailStyle} source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png' }}/>
			{name}
			</View>
			{comment}
			<View 
			style={{flex: 1,
			flexDirection: 'row',
			textAlignVertical: 'center',
			}}>
				
			<View style={styles.navBar}>
			<Text style={[styles.DefaultTextStyle, styles.DefaultTextStyleLeft]} onPress = {this.handleClick}>{this.state._likes} Likes</Text>
				<Text style={[styles.DefaultTextStyle, styles.DefaultTextStyleRight]}>Time Elapsed</Text>
			</View>
			</View>
			
		</View>
		)
	};
}

const styles = StyleSheet.create({
	commentBody: {
		backgroundColor: '#F0F0EE'
	},
	TextBoxStyle: {
		margin: 2,
		borderWidth: 0, 
		borderRadius: 20,
		padding: 5,
		textAlignVertical: 'center',
		fontSize: 10,
		flexWrap: 'wrap',
		textAlign: 'justify',
	},
	ThumbnailStyle: {
		width: 20,
		height: 20,
		borderRadius: 10,
	},
	UserName: {
		textAlignVertical: 'center',
		margin: 2,
	},
	DefaultTextStyle: {
		textAlignVertical: 'center',
		fontSize: 10,
	},
	DefaultTextStyleLeft: {
		textAlign: 'left',
		marginLeft: 2,
	},
	DefaultTextStyleRight: {
		textAlign: 'right',
		marginRight: 2,
	},
    navBar: {
	   width: '100%',
       height: 20,
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
     },
});