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
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './Stylesheet';

import CommonDataManage from './CommonDataManage';
const commonData = CommonDataManage.getInstance();

var url = "http://45.77.110.134:9000";
var actualLink = url + "/question/verb/year/0";

export default class ReadyScreen extends Component<{}> {
  
  constructor(props) {
    //this can only accept navigation information
    //other coding should be in componentDidMount
    super(props);
    this.state = this.props.navigation;
  }

  _fetchingInfo = () => {
    var that = this;

    fetch(actualLink)
    .then(function(response){
      if (response.status >= 400){
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      that.setState({fetched_data: data});
    })
  }; 

  _randomURL()
  {
    if (Math.floor(Math.random() * 2))
    {
      this.setState({question_type: "mc"});
      return url + "/question/vocab/year/0/mc_meaning";
    }
    else
    {
      this.setState({question_type: "shortq"});
      return url + "/question/kanji/year/0/spelling";
    }
  }

  componentDidMount() {
    this.setState({fetched_data: "", question_type: ""});

    //set up the display text, whether it is the first question
    //or next question
    
    var temp_display = "";
    if (!this.state.state.params.correct)
      temp_display += commonData.getMode() + " Mode, Click 'Next' to begin";
    else
      temp_display += this.state.state.params.correct;
    
    if (this.state.state.params.answer){
      temp_display += "\n correct answer is " + this.state.state.params.answer;
      temp_display += "\n your answer is " + this.state.state.params.user_input;
    }
    this.setState({display_text: temp_display});
    
    //check the question mode later
    //if (this.state.)
    actualLink = this._randomURL();

    //get the question from the database
    //this will fetch the data into fetched_data
    this._fetchingInfo();
    
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
            {this.state.display_text}
          </Text>

          <Button 
            title="Next"
            style={styles.button}
            onPress={() => {
              if (this.state.question_type == "mc")
                navigate('MCQ', {question : this.state.fetched_data});
              else
                navigate('SHORTQ', {question : this.state.fetched_data});
            }} />
        </View>
      </View>
    );
  }
}


