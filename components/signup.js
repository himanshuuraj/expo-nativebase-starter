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
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Title
} from "native-base";

import Modal from "react-native-modal";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";

import data from "./Countries";
// Default render of country flag
const defaultFlag = data.filter(obj => obj.name === "United Kingdom")[0].flag;

export default class SignUp extends Component {
  state = {
    flag: defaultFlag,
    modalVisible: false,
    phoneNumber: "",
    searchText: ""
  };

  onChangeText(key, value) {
    this.setState({
      [key]: value
    });
  }

  showModal() {
    this.setState({ modalVisible: true });
  }

  hideModal() {
    this.setState({ modalVisible: false });
    // Refocus on the Input field after selecting the country code
    //this.refs.PhoneInput._root.focus();
  }

  async selectCountry(country) {
    // Get data from Countries.js
    this.setState({
      modalVisible: false
    });
    const countryData = await data;
    try {
      // Get the country code
      const countryCode = await countryData.filter(
        obj => obj.name === country
      )[0].dial_code;
      // Get the country flag
      const countryFlag = await countryData.filter(
        obj => obj.name === country
      )[0].flag;
      // Update the state then hide the Modal
      this.setState({ phoneNumber: countryCode, flag: countryFlag });
      await this.hideModal();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const countryData = data;
    return (
      <Container
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "red",
          display: "flex",
          flex: 1
        }}
      >
        <Container
          style={{
            backgroundColor: "white", // oTpDIvision, Green earlier
            flex: 0.3
          }}
        />
        <Container
          style={{
            backgroundColor: "white", //MiddleDivision, Blue earlier
            flex: 0.5,
            paddingLeft: "3%",
            paddingRight: "3%"
          }}
        >
          <Tabs
            tabBarUnderlineStyle={{
              backgroundColor: "black",
              height: "4%"
            }}
          
          >
            <Tab
              heading={
                <TabHeading
                  style={{
                    backgroundColor: "white"
                  }}
                >
                  <Text style={{
                    color: "black",
                    
                  }}>PHONE NUMBER</Text>
                </TabHeading>
              }
            >
              <Container>
                <SafeAreaView style={styles.container}>
                  <KeyboardAvoidingView
                    style={styles.container}
                    behavior="padding"
                    enabled
                  >
                    <TouchableWithoutFeedback
                      style={styles.container}
                      onPress={Keyboard.dismiss}
                    >
                      <View style={styles.container}>
                        <Container style={styles.infoContainer}>
                          {/* Phone input with native-base */}
                          <Item style={styles.itemStyle}>
                            {/* <Icon active name="call" style={styles.iconStyle} /> */}
                            <Text>{this.state.phoneNumber}</Text>
                            <Icon style={{
                              Title: this.state.countryFlag
                            }}
                              onPress={e => {
                                //alert("TTT");
                                this.showModal();
                              }}
                              
                              name="md-arrow-dropdown"
                              style={[styles.iconStyle, { marginLeft: 0,
                              
                              }]}
                            />
                            <TextInput
                              
                              placeholder="Phone Number"
                              placeholderTextColor="black"
                              keyboardType={"phone-pad"}
                              returnKeyType="done"
                              autoCapitalize="none"
                              autoCorrect={false}
                              secureTextEntry={false}
                              style={styles.inputStyle}
                              clearButtonMode='always'
                            />
                            
                          </Item>
                          
                        </Container>
                        
                        <Button disabled block>
              <Text>NEXT</Text>
            </Button>
                      </View>
                    
                    </TouchableWithoutFeedback>
                  </KeyboardAvoidingView>
                </SafeAreaView>
                
              </Container>
             
            </Tab>
            <Tab
              heading={
                <TabHeading
                  style={{
                    backgroundColor: "white"
                    
                  }}
                >
                  <Text style={{
                    color: "black"
                  }}>EMAIL ADDRESS</Text>
                </TabHeading>
              }
            >
              <Container>
        <Header />
        <Content>
          <Item >
            <Input style ={{
              backgroundColor: "white"
            }}placeholder="Email Address" />
          </Item>
          <Button disabled block>
              <Text>NEXT</Text>
            </Button>
        </Content>
       
      </Container>
            </Tab>
          
          </Tabs>
         
        </Container>
        <Container
          style={{
            backgroundColor: "white",
            flex: 0.25
          }}
        />
        <Modal
          style={{
            width: "80%",
            marginLeft: "10%"
          }}
          isVisible={this.state.modalVisible}
          onBackdropPress={e => {
            this.setState({
              modalVisible: false
            });
          }}
        >
          <ScrollView
            style={{
              backgroundColor: "#fff",
              borderWidth: 2,
              borderColor: "#eee"
            }}
          >
            <TextInput
              onChangeText={text => {
                //alert(e.target.value);
                this.setState({
                  searchText: text
                });
              }}
              style={{
                width: "100%",
                height: 50,
                borderBottomColor: "#bbb",
                borderBottomWidth: 1
              }}
            />
            <View style={{ flex: 1 }}>
              <View style={{ flex: 7 }}>
                {/* Render the list of countries */}
                <FlatList
                  data={countryData.filter(
                    item =>
                      item.name
                        .toLowerCase()
                        .indexOf(
                          this.state.searchText &&
                            this.state.searchText.toLowerCase()
                        ) === 0
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={{
                        borderBottomWidth: 1,
                        borderColor: "#eee",
                        padding: 10
                      }}
                      onPress={() => this.selectCountry(item.name)}
                    >
                      <View style={styles.countryStyle}>
                        <Text style={styles.textStyle}>
                          {item.name + " (" + item.dial_code + ") "}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </ScrollView>
        </Modal>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aa73b7",
    justifyContent: "center",
    flexDirection: "column"
  },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white"
  },
  iconStyle: {
    color: "blue",
    fontSize: 30,
    marginLeft: 10
    
  },
  itemStyle: {
    marginBottom: 150
  },
  inputStyle: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    color: "#5a52a5"
  }
});
