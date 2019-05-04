import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet,
  View, 
} from "react-native";
import {
 Image, TextInput, FlatList } from 'react-native';
import { 
 Container, Header, Content, Action, Card, Footer, FooterTab, Badge, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body, Divider } from 'native-base';
import Post from './post.js'
import CommentBox from './CommentBox.js';
import PostUI from './postUI';
import AjaxResponse from './ajaxResponse.js';

export default class Home extends React.Component {
	
	constructor (props) {
		super(props);
	}
	
  state = { expanded: false,
  	 		show: false,
	  		textList: ["Pankaj", "Rita", "Mohan", "Amit", "Babulal", "Sakshi"],
	  		hidden: true, 
	  		input: 'hello',
			responseName: '',
			userName: 'havmad',
	  		postText: '',
			imageUrl: "http://www.remadays.com/wp-content/uploads/2016/11/Picture_online-2015.jpg",
			commentText: '',
			arr: [1, 2, 3, 4, 5],
			flatListArr: [],
			responseData: {},
  		};

  componentWillMount() {
	this.setState ({
		commentText: '',
	});
	// this.insertFlatList();
	// alert(insertUserInfo.name);
  }
  
  componentDidMount() {
	  
  }

  handleExpandClick = () => {
    this.setState(state => ({ 
		expanded: !state.expanded,
		hidden: false })
	);
  };
  
  handleSendPress = (input) => {
	  // alert(this.state.input);
	  // this.state.textList.push({input});
	  // alert(this.state.textList);
  }
  
  insertFlatList() {
	  const flatListArr = this.state.flatListArr.slice();
	  flatListArr.unshift(this.state.responseData);
	  this.setState({flatListArr: flatListArr}, console.log('text of flatListArr[0] ', this.state.flatListArr))
	  
  }
  
  whenValueRecieved = (responseData) => {
	  this.setState({
		  responseData
	  }, () => {
		  this.insertFlatList()
		  console.log('from flatList', this.state.responseData)})
	  
  }
  
  render() {
    
    showComment = () => {
  	  this.setState(prevState => {
		  return {show: true}
	  })
    }
	
    return (
		
      <Container style={{
		  width: "100%", flex: 1,
      }}>
        <Header Container style={styles.headerStyle} />
		
		<Post restApiResponseData={this.whenValueRecieved}/>
		  {
			  
			  <FlatList
			    data={this.state.flatListArr}
			    renderItem={({item}) => 
					<PostUI k={item}/>
		}
			  />
				  
          }
		  
		  

        <Footer Container style={styles.footerStyle}>
        <FooterTab Container style={styles.footerTabStyle}>
           <Button badge vertical>
             <Badge>
		  		<Text>2</Text>
		  	 </Badge>
             <Icon name="home" />

           </Button>
		   <Button 
		   	onPress={e => {
            this.props.moveToScreen('signUp');
          	}}
		  	vertical>
            <Icon name="camera" />
            <Text>Post</Text>
           </Button>
           <Button active badge vertical>
             <Badge ><Text>51</Text></Badge>
             <Icon active name="notifications" />
             <Text></Text>
           </Button>
           <Button vertical>
             <Icon name="person" />
             <Text></Text>
           </Button>
         </FooterTab>
       </Footer>
      </Container>



      );
  }
}

const styles = StyleSheet.create({
	headerStyle: {
		height: 40,
	    backgroundColor: "#ff9933",
	},
	footerStyle: {
	    backgroundColor:"white",
	},
	footerTabStyle: {
        backgroundColor:"white",
    },
})