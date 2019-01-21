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
  Input
} from "native-base";

import { View } from "react-native";

export default () => {
  return (
    <Container
      style={{
        width: "100%"
      }}
    >
      <Header />
      <Content
        contentContainerStyle={{
          padding: 20
        }}
      >
        <Container
          style={{
            
            alignItems: "center",
            width: "100%"
          }}
        >
          <Text
            style={{
                width: "70%",
              textAlign: "center",
              fontSize: 25,
              //fontWeight: "bold",
              //backgroundColor: "yellow"
            }}
          >
            Name and Password
          </Text>
          <Form
            style={{
              width: "90%",
              backgroundColor: "light grey"
            }}
          >
            <Item floatingLabel>
              <Label>Full Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
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
              <Text>Next</Text>
            </Button>
          </View>
        </Container>
      </Content>
    </Container>
  );
};
