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
} from 'react-native';
//import different navigation
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import ReadyScreen from './ReadyScreen';
import MCQuestionScreen from './MCQuestionScreen';
import NextScreen from './NextScreen';
import ShortQuestionScreen from './ShortQuestionScreen';

const RootNavigator = StackNavigator({
  Home : {
    screen: HomeScreen,
    navigationOptions: {
      headerLeft: null,
    }
  },
  Second: {
    screen: SecondScreen,
    navigationOptions: {
      headerLeft: null,
    },
  },
  Ready: {
    screen: ReadyScreen,
    navigationOptions: {
      headerLeft: null,
    },
  },
  MCQ : {
    screen: MCQuestionScreen,
    navigationOptions: {
      headerLeft: null,
    },
  },
  SHORTQ : {
    screen : ShortQuestionScreen,
    navigationOptions: {
      headerLeft: null,
    },
  },
});

export default RootNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize : 20
  },
  input: {
    marginTop: 20,
    paddingHorizontal: 15,
    height: 40,
    backgroundColor: 'white',
    textAlign:'center',
  }
});
