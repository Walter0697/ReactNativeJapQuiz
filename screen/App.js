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
import CustomScreen from './CustomScreen';
import ConjugationScreen from './ConjugationScreen';
import WrongAnswerScreen from './WrongAnswerScreen';

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
  Custom: {
    screen: CustomScreen,
    navigationOptions: {
      headerLeft: null,
    },
  },
  Conjugation: {
    screen: ConjugationScreen,
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
  WrongQ : {
    screen : WrongAnswerScreen,
    navigationOptions: {
      headerLeft: null,
    },
  },
});

export default RootNavigator;
