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
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './Stylesheet';
import images from './AssetsManager';

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
    
    this.setState({url: url,
                   fetched_data: question,
                   question: info.question,
                   answer: info.answer,
                   userinput: "",});

    //if it has meaning provided
    if (info.meaning)
      this.setState({meaning: "The meaning of the word is " + info.meaning});

    //if this is from previuos wrong question
    if (this.state.state.params.index)
      this.setState({index: this.state.state.params.index});
  
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
            {this.state.question} 
          </Text>
          <Text style={styles.instruction}>
            {this.state.meaning}
          </Text>
          <TextInput
          style={styles.input}
          value={this.state.userinput}
          placeholder="Type your answer here"
          editable={true}
          onChangeText={(text) => this.setState({userinput:text})}  
          />
          <TouchableOpacity style={styles.buttonBox} activeOpacity = {.5} 
                            onPress={() => {
                              if (this.state.answer == this.state.userinput)
                              {
                                commonData.changePoint(1);
                                if (this.state.index)
                                  commonData.removeWrongQuestion(this.state.index);
                                navigate("Ready", {"correct": "You are correct"});
                              }
                              else
                              {
                                commonData.appendWrongQuestion(this.state.url, this.state.fetched_data, this.state.question, "shortq");
                                navigate("Ready", {"correct": "This is not correct", 
                                                  "answer" : this.state.answer,
                                                  "user_input": this.state.userinput,});
                              }
                            }}>
              <Text>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


