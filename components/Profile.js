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
  Input,Footer, FooterTab, 
  Picker, Icon
} from "native-base";

import { View } from "react-native";

export default (props) => {
  return (
    <Container>
      <Content
        contentContainerStyle={{

          paddingTop : 0,
          paddingBottom : 0
        }}
      >
        <Container
          style={{
            backgroundColor: "red",
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
            Profile
          </Text>
          <Form
            style={{
              width: "90%",
              backgroundColor: "light grey"
            }}
          >
           <Item floatingLabel>
              <Label>FullName</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Phone</Label>
              <Input />
            </Item>
            {/* <Picker style={{width: '10%'}}
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Gender"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="Male" />
              <Picker.Item label="ATM Card" value="Female" />
              <Picker.Item label="Debit Card" value="Chhakka" />
            </Picker> */}
          </Form>
          <View
            style={{
              marginTop: 30,
              width: "90%"
            }}
          >
            <Button disabled block>
              <Text>Save</Text>
            </Button>
          </View>
        </Container>
      </Content>
      </Container>
      
    
  );
};
