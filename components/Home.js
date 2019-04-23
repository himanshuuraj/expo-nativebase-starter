import React from 'react';
import PropTypes from 'prop-types';
import {
  View
} from "react-native";
import {
 Image, TextInput } from 'react-native';
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
          <Card key={index} style={{margin:"2%"}}>
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
