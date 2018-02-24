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
    var temp_ans = this.state.state.params.question.answer;
    this.setState({question: "What is the meaning of " + this.state.state.params.question.question + "?",
                  a: this.state.state.params.question.a,
                  b: this.state.state.params.question.b,
                  c: this.state.state.params.question.c,
                  d: this.state.state.params.question.d,
                  answer: temp_ans});
    if (temp_ans == 0)
      this.setState({string_answer : this.state.state.params.question.a});
    else if (temp_ans == 1)
      this.setState({string_answer : this.state.state.params.question.b});
    else if (temp_ans == 2)
      this.setState({string_answer : this.state.state.params.question.c});
    else if (temp_ans == 3)
      this.setState({string_answer : this.state.state.params.question.d});
  
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
          <TouchableOpacity style={styles.buttonBox} activeOpacity = {.5} 
                            onPress={() => {
                              if (this.state.answer == 0)
                              {
                                commonData.changePoint(1);
                                navigate("Ready", {"correct": "You are correct"});
                              }
                              else
                                navigate("Ready", {"correct": "This is not correct", "answer" : this.state.string_answer, "user_input": this.state.a});
                            }}>
              <Text>{this.state.a}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBox} activeOpacity = {.5} 
                            onPress={() => {
                              if (this.state.answer == 1)
                              {
                                commonData.changePoint(1);
                                navigate("Ready", {"correct": "You are correct"});
                              }
                              else
                                navigate("Ready", {"correct": "This is not correct", "answer" : this.state.string_answer, "user_input": this.state.b});
                            }}>
              <Text>{this.state.b}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBox} activeOpacity = {.5} 
                            onPress={() => {
                              if (this.state.answer == 2)
                              {
                                commonData.changePoint(1);
                                navigate("Ready", {"correct": "You are correct"});
                              }
                              else
                                navigate("Ready", {"correct": "This is not correct", "answer" : this.state.string_answer, "user_input": this.state.c});
                            }}>
              <Text>{this.state.c}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBox} activeOpacity = {.5} 
                            onPress={() => {
                              if (this.state.answer == 3)
                              {
                                commonData.changePoint(1);
                                navigate("Ready", {"correct": "You are correct"});
                              }
                              else
                                navigate("Ready", {"correct": "This is not correct", "answer" : this.state.string_answer, "user_input": this.state.d});
                            }}>
              <Text>{this.state.d}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


