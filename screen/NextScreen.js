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
  Image,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import CommonDataManage from './CommonDataManage';
import styles from './Stylesheet';
import images from './AssetsManager';

var url = "http://45.77.110.134:9000";
var actualLink = url + "/question/verb/year/0";

export default class NextScreen extends Component<{}> {
  
  constructor(props) {
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

  componentDidMount() {
    var commonData = CommonDataManage.getInstance();
    this.setState({newdata:commonData.getPoint()});
    this.setState({fetched_data: ""});
    this.setState({correct:this.state.state.params.correct});
    
    //check the question mode later
    //if (this.state.)
    actualLink = url + "/question/vocab/year/0/mc_meaning";

    //get the question from the database
    //this will fetch the data into fetched_data
    this._fetchingInfo();
    
  }

  render() {
    const { navigate } = this.props.navigation;
    const resizeMode = 'cover';
    return (
      <View style={styles.wholeContainer}>

        <View
          style={styles.backgroundView}>
          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={ images.backgroundImage }
          />
        </View>

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
            {this.state.correct}
          </Text>

          <Button 
            title="Next"
            style={styles.button}
            onPress={() => {
              navigate('MCQ', {question : this.state.fetched_data});
            }} />
        </View>
      </View>
    );
  }
}


