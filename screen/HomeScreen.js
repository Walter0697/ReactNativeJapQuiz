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
  Image,  
  AsyncStorage,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './Stylesheet';
import images from './AssetsManager';

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
        this.setState({score : commonData.getPoint(), testing: commonData.getWrongList()});
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    const resizeMode = 'cover';
    return(
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
          title="Custom Practice"
          style={styles.button}
          onPress={() => {
            commonData.setMode("Custom Practice");
            navigate('Custom', {});
          }}/>

        <Button
          title="Next Quiz Practice"
          style={styles.button}
          onPress={() => {
            commonData.setMode("Next Quiz");
            navigate('Ready', {});
          }}/>

        <Button
          title="Katakana Practice"
          style={styles.button}
          onPress={() => {
            commonData.setMode("Katakana Practice");
            navigate('Ready', {});
          }}/>

        <Button
          title="Previous Wrong Questions"
          style={styles.button}
          onPress={() => {
            commonData.setMode("Wrong List");
            navigate('WrongQ', {});
            //will navigate the screen the select the question type
          }}/>

        <Button
          title="Converting verb/adjective"
          style={styles.button}
          onPress={() => {
            navigate('Conjugation', {});
          }}/> 

      </View>
    );
  }
}

