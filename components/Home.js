import React from 'react';
import PropTypes from 'prop-types';
import {
  View
} from "react-native";
import { Image, TextInput } from 'react-native';
import { Container, Header, Content, Card, Footer, FooterTab, Badge, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';
//import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';


export default class Home extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Container style={{
        width: "100%"
      }}>
         <Header Container style={{
          height: 70,
          backgroundColor: "#ff9933"

        }}


        ></Header>

        <Content>
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
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
              </CardItem>
              <CardItem>
              <Icon active name = "user" style = {{width: '7.5%'}}/>
              <TextInput
              placeholder="Add a comment"
              multiline={true}
              style = {{marginRight: 20, width: '80%'}}
              ></TextInput>
              <Icon style = {{width: '7.5%'}} active name = "post"/>
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
           <Button vertical>
             <Icon name="camera" />
             <Text>Camera</Text>
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
