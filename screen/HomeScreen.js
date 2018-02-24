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
  AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './Stylesheet';

import CommonDataManage from './CommonDataManage';
const commonData = CommonDataManage.getInstance();

export default class HomeScreen extends Component<{}> {
  
  constructor(props) {
    super(props);
    this.state = {score : 0};
  }

  componentDidMount() {
    commonData.fetchData()
      .done(() => {
        this.setState({score : commonData.getPoint()});
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.wholeContainer}>
        <Text style={styles.title}>
          Japanese Quiz Practice
        </Text>

        <Text style={styles.instruction}>
          Current Score : {this.state.score}
        </Text>
 
        <Button 
          title="Quick Practice"
          style={styles.button}
          onPress={() => {
            commonData.setMode("Quick Practice");
            navigate('Ready', {});
        }}/>

        <Button
          title="Increase"
          style={styles.button}
          onPress={() => {
            commonData.changePoint(1);
            this.setState({score: commonData.getPoint()});
          }}/>
      </View>
    );
  }
}

