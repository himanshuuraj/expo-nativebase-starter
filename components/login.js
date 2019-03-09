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
  Input,Footer, FooterTab, Hyperlink
} from "native-base";

import { View } from "react-native";

export default (props) => {
  return (
    <Container
      style={{
        width: "100%"
      }}
    >

      <Content
        contentContainerStyle={{
          padding: 0
        }}
      >
        <Container
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "Yellow"
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 40,
              fontWeight: "bold",
             // fontStyle: "italic"
             color:"#ff9933"

            }}
          >
            𝐁 𝐇 𝐀 𝐈 𝐘 𝐀 𝐑 𝐈
          </Text>
          <Form
            style={{
              width: "90%",
              backgroundColor: "light grey"
            }}
          >
            <Item floatingLabel>
              <Label>Email or Phone number</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View
            style={{
              marginTop: 10,
              width: "90%"
            }}
          >
            <Button block style={{
              backgroundColor: "#ff9933"
            }}
            onPress={e => {
              props.moveToScreen('home');
            }}
            >
              <Text style={{
                fontSize: 17
              }}>login</Text>
            </Button>
          </View>
        </Container>

      </Content>
      <Footer>
        <FooterTab>
          <Button style={{
            backgroundColor: "white"
          }}
          onPress={e => {
            props.moveToScreen('signUp');
          }}>
            <Text style={{
              color: "black"
            }}> Not Registered yet? CLick here to SignUp</Text>
            </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
