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

import QuestionParser from './QuestionParser';
import CommonDataManage from './CommonDataManage';
const commonData = CommonDataManage.getInstance();

export default class MCQuestionScreen extends Component<{}> {
  
  constructor(props) {
    super(props);
    this.state = this.props.navigation;
  }

  componentDidMount() {
    let url = this.state.state.params.url;
    let question = this.state.state.params.question;
    let info = QuestionParser.parser(url, question);

    this.setState({url : url,
                  fetched_data: question,
                  question: info.question,
                  a: info.a, b: info.b, c: info.c, d: info.d,
                  correct_answer: info.correct_answer,
                  answer: info.answer});
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
                              {
                                commonData.appendWrongQuestion(this.state.url, this.state.fetched_data, "mc");
                                navigate("Ready", {"correct": "This is not correct", "answer" : this.state.correct_answer, "user_input": this.state.a});
                              }
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
                              {
                                commonData.appendWrongQuestion(this.state.url, this.state.fetched_data, "mc");
                                navigate("Ready", {"correct": "This is not correct", "answer" : this.state.correct_answer, "user_input": this.state.b});
                              }
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
                              {
                                commonData.appendWrongQuestion(this.state.url, this.state.fetched_data, "mc");
                                navigate("Ready", {"correct": "This is not correct", "answer" : this.state.correct_answer, "user_input": this.state.c});
                              }
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
                              {
                                commonData.appendWrongQuestion(this.state.url, this.state.fetched_data, "mc");
                                navigate("Ready", {"correct": "This is not correct", "answer" : this.state.correct_answer, "user_input": this.state.d});
                              }
                            }}>
              <Text>{this.state.d}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


