/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Picker,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './Stylesheet';

var typeItems = ["vocab", "verb", "adjective", "kanji"];

import CommonDataManage from './CommonDataManage';
const commonData = CommonDataManage.getInstance();

export default class CustomScreen extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = this.props.navigation;
  }

  componentDidMount() { 
    this.setState({ typeSelected : "vocab" });
    typeItems = ["vocab", "verb", "adjective", "kanji"];
  }

  /*
  {
              typeItems.map(item => {
               return (<Item label={item} value={item} key={item} />)})
            }*/
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wholeContainer}>
        <View style={styles.backContainer}>
          <Button 
            title="Back"
            style={styles.backButton}
            onPress={() => {
              navigate('Home', {});
            }}/>
        </View>
        <View style={styles.main_content}>
          <Text style={styles.instruction}>Type something</Text>

          <Picker
            style={styles.picker}
            selectedValue={this.state.typeSelected}
            onValueChange={(selected) => { this.setState({typeSelected : selected})}}
          >
            {typeItems.map(item => {
              return (<Picker.Item label={item} value={item} key={item}/>)
            })}
          </Picker>

          <TouchableOpacity style={styles.buttonBox} activeOpacity = {.5} 
                            onPress={() => {
                              if (this.state.answer == this.state.userinput)
                              {
                                commonData.changePoint(1);
                                navigate("Ready", {"correct": "You are correct"});
                              }
                              else
                                navigate("Ready", {"correct": "This is not correct", 
                                                  "answer" : this.state.answer,
                                                  "user_input": this.state.userinput,});
                            }}>
              <Text>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


