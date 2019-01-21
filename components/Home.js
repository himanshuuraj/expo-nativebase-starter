import React, { Component } from "react";
import { Font, AppLoading } from "expo";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Form,
  Item,
  Label,
  Input,
  Card,
  CardItem,
  Body,
  Image,
  Left,
  Thumbnail,
  Icon,
  Right
} from "native-base";

import { View } from "react-native";


export default () => {
  return (
    <Container>
    <Header>
      <Text style={{
        fontStyle: "italic",
        fontWeight: "25"
        
      }}>Bhaiyari</Text>
    </Header>
    <Content>
      <Card>
        <CardItem>
          <Left>
           // <Thumbnail source={{uri: 'C:\Users\vk\Documents\Bhaiyari\node_modules\react-native\RNTester\js\AnimatedGratuitousApp'}} />
            <Body>
              <Text>NativeBase</Text>
              <Text note>GeekyAnts</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
        //  <Image source={{uri: 'C:\Users\vk\Documents\Bhaiyari\node_modules\react-native\RNTester\js\AnimatedGratuitousApp'}} style={{height: 200, width: null, flex: 1}}/>
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
      </Card>
    </Content>
  </Container>
  );
};
