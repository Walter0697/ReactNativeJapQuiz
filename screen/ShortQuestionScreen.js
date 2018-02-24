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
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './Stylesheet';

import CommonDataManage from './CommonDataManage';
const commonData = CommonDataManage.getInstance();

export default class MCQuestionScreen extends Component<{}> {
  
  constructor(props) {
    super(props);
    this.state = this.props.navigation;
    
  }

  componentDidMount() {
    var tempanswer;
    
    this.setState({question: "What is the spelling of " + this.state.state.params.question.question + "?",
                  answer: this.state.state.params.question.answer,
                  userinput: "",});
  
  }

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
          <Text style={styles.instruction}>
            {this.state.question} 
          </Text>
          <TextInput
          style={styles.input}
          value={this.state.verb}
          placeholder="Type your answer in hiragana"
          editable={true}
          onChangeText={(text) => this.setState({userinput:text})}  
          />
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


