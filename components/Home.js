import React from 'react';
import PropTypes from 'prop-types';
import {
  View
} from "react-native";
import {
 Image, TextInput, FlatList } from 'react-native';
import { 
 Container, Header, Content, Action, Card, Footer, FooterTab, Badge, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body, Divider } from 'native-base';
//import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import Post from './post.js'
import CommentBox from './CommentBox.js';
import PostUI from './postUI';

export default class Home extends React.Component {
	
	constructor (props) {
		super(props);
	}
	
  state = { expanded: false,
  	 		show: false,
	  		textList: ["Pankaj", "Rita", "Mohan", "Amit", "Babulal", "Sakshi"],
	  		hidden: true, 
	  		input: 'hello',
  			};

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded,
	hidden: false }));
  };
  
  handleSendPress = (input) => {
	  // alert(this.state.input);
	  // this.state.textList.push({input});
	  // alert(this.state.textList);
  }
  
  // From here we will send the list of comments to be used alongwith
  
  // This thing requires to be completed as it will make the UI more usable as it will not show comments until Comments button is pressed
  
  // CommentSection = () => {
  // 	  if (!this.state.hidden) {
  // 		  return(
  // 			  <CardItem>
  // 	          <Icon active name = "user" style = {{width: '7.5%'}}/>
  // 			  <TextInput
  // 	          placeholder="Add a comment"
  // 	          multiline={true}
  // 	          style = {{marginRight: 20, width: '80%'}}
  // 	          ></TextInput>
  // 	          <Icon style = {{width: '7.5%'}} active name = "send"/>
  // 			  </CardItem>
  // 		  )
  // 	  } else {
  // 		  return (
  // 			  <CardItem>
  // 		  	</CardItem>
  // 		  )
  // 	  }
  //
  // }
  
  //There should be separate comment feature for everypost.
  
  // postComment = () => {
  //
  // }
  render() {
    const { classes } = this.props;
    showComment = () => {
  	  this.setState(prevState => {
		  return {show: true}
	  })
	  
    }
    return (
		
      <Container style={{
        width: "100%",
      }}>
         <Header Container style={{
          height: 40,
          backgroundColor: "#ff9933"

        }}
		
        >
     
		</Header>
		
        <Content>
		<Post />
		  {
            [...Array(5)].map((item, index) =>(
				<PostUI k={index} />
          
          ))
          }
        </Content>
		  

        <Footer Container style={{
          backgroundColor:"white"
        }}>
         <FooterTab Container style={{
           backgroundColor:"white"
         }}>
           <Button badge vertical>
             <Badge><Text>2</Text></Badge>
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
