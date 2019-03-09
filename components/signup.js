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
  Input,Footer, FooterTab
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

          paddingTop : 0,
          paddingBottom : 0
        }}
      >
        <Container
          style={{
            display : "flex",
            justifyContent : "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          <Text
            style={{
              width: "70%",
              textAlign: "center",
              fontSize: 25
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
              <Label>Email or Phone</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View
            style={{
              marginTop: 30,
              width: "90%"
            }}
          >
            <Button disabled block>
              <Text>SignUp</Text>
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
            props.moveToScreen('login');
          }}>
            <Text style={{
              color: "black"
            }}> Already have an Account. Login here</Text>
            </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
