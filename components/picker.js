import React, { Component } from "react";
// import { Container, Header, Content, Icon, Picker, Form } from "native-base";
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
    Picker, Icon,
    View
  } from "native-base";

export default class PickerPlaceholderExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
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
            <Picker style={{width: undefined}}
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Gender"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Chhakka" value="Chhakka" />
            </Picker>
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
        </Content>
      </Container>
    );
  }
}