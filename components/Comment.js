import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  StyleSheet,
  View
} from 'react-native';
import {
  Icon,
} from 'native-base';

import moment from 'moment';

export default class Comment extends React.Component {

  render() {

    return (
      [...Array(5)].map((item, index) =>(
      <View style = {styles.container}>

        <View style = {styles.contentContainer}>
            <View style = {{flex: .75}}>  <Icon name="thumbs-up"/>  </View>
            <View style = {{flex: 1}}> <Text style = {{flex: 1}, [styles.text, styles.name]}> name </Text>  </View>
            <View style = {{flex: 8.25}}>
            <Text style = {{flex: 8.25}, styles.text} multiline={true}>hello this is the longest text with 82.5% of width and this will be the longest of all ever</Text>
            </View>
        </View>
      </View>
      ));

      <View style = {styles.submitComment}>
        <Icon active name = "user" style = {{width: '7.5%'}}/>
        <TextInput
        placeholder="Add a comment"
        multiline={true}
        style = {{marginRight: 20, width: '80%'}}
        >
        </TextInput>
        <Icon style = {{width: '7.5%'}} active name = "post"/>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  contentContainer: {
    flex: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderColor: 'white',
    padding: '2%',
    backgroundColor: 'white'
  },
  text: {
    color: '#000',
    fontSize: 15
  },
  name: {
    fontWeight: 'bold'
  },
  created: {
    color: '#BBB'
  },
  submitComment: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '2%',
    backgroundColor: 'grey',
    alignItems: 'flex-end'
  }
});
