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
import SimplePicker from 'react-native-simple-picker';
import { StackNavigator } from 'react-navigation';
import styles from './Stylesheet';

let index = 0;
const typeLabels = ['all', 'vocab', 'adjective', 'verb', 'kanji'];
const yearLabels = ['1', '2'];

import CommonDataManage from './CommonDataManage';
const commonData = CommonDataManage.getInstance();

export default class CustomScreen extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = this.props.navigation;
  }

  componentDidMount() { 
    this.setState({ selectedType : '', selectedYear : '',});
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
          <Text style={styles.instruction}
            onPress={() => {this.refs.typePicker.show(); }}>
            { (this.state.selectedType == "") ? "click here to choose the type of question you want to practice" : 
               "Question Type : " + this.state.selectedType}
          </Text>
          <SimplePicker
            ref={'typePicker'}
            options={typeLabels}
            labels={typeLabels}
            itemStyle={{color: 'black',
                        textAlign: 'center',
                        fontWeight: 'bold',}}
            onSubmit={(option) => {
                      this.setState({selectedType : option});
                      }} 
          />

          <Text style={styles.instruction}
            onPress={() => {this.refs.yearpicker.show(); }}>
            { (this.state.selectedYear == "") ? "click here to choose the range of the question" :
              "Year selected : " + this.state.selectedYear}
          </Text>
          <SimplePicker
            ref={'yearpicker'}
            options={yearLabels}
            labels={yearLabels}
            itemStyle={{color: 'black',
                        textAlign: 'center',
                        fontWeight: 'bold',}}
            onSubmit={(option) => {
                      this.setState({selectedYear: option});
                      }}
          />

          <TouchableOpacity style={styles.buttonBox} activeOpacity = {.5} 
                            onPress={() => {
                              if (this.state.selectedType == "" || this.state.selectedYear == "")
                              {
                                alert("You should select the type and the range");
                              }
                              else
                              {
                                commonData.setQuestionType(this.state.selectedType);
                                commonData.setQuestionYear(this.state.selectedYear);
                                navigate('Ready', {});
                              }
                            }}>
              <Text>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}