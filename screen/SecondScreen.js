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

import CommonDataManage from './CommonDataManage';
import styles from './Stylesheet';

export default class SecondScreen extends Component<{}> {
  
  constructor(props) {
    super(props);
    this.state = this.props.navigation;
  }

  componentDidMount() {
    var commonData = CommonDataManage.getInstance();
    this.setState({newdata:commonData.getLevel()});
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TextInput
          style={styles.input}
          value={this.state.verb}
          editable={true}
          onChangeText={(text) => this.setState({verb:text})}  
        />
        <Button 
          title="Back"
          style={styles.button}
          onPress={() => {
            navigate('Home', {});
          }}/>
        <Text style={styles.instructions}>
          {JSON.stringify(this.state)} 
        </Text>
      </View>
    );
  }
}


