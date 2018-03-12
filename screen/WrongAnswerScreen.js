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
  FlatList,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './Stylesheet';

import CommonDataManage from './CommonDataManage';
const commonData = CommonDataManage.getInstance();

export default class ConjugationScreen extends Component<{}> {
  
  constructor(props) {
    super(props);
    this.state = this.props.navigation;
  }

  componentDidMount() {
    this.setState({ list: commonData.getWrongList() });
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
          <Button
            title="Empty Wrong Question"
            style={styles.clearButton}
            onPress={() => {
              commonData.clearWrongList();
              this.setState({ list: [] });
            }}
            />
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={this.state.list}
            renderItem={({item}) => 
              <TouchableOpacity style={styles.buttonBox} activeOpacity = {.5}
                onPress={() => {
                  if (item.type == "mc")
                  navigate('MCQ', {question : item.data, url: item.url, index: item.key});
                else
                  navigate('SHORTQ', {question : item.data, url: item.url, index: item.key});
                }}>
                <Text>
                  {item.question}
                </Text>
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    );
  }
}

