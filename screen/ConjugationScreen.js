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
import { StackNavigator } from 'react-navigation';
import styles from './Stylesheet';

import CommonDataManage from './CommonDataManage';
const commonData = CommonDataManage.getInstance();

var verb_end = ['う','す','ず','く','ぐ','つ','づ','む','る','ぬ','ふ','ぷ','ぶ'];
var adjective_end = ['い','な'];

var url = "http://45.77.110.134:9000";
var verbConvert = url + "/verbConvert/";
var adjectiveConvert = url + "/adjectiveConvert/";
var actualLink = verbConvert + "書く";

export default class ConjugationScreen extends Component<{}> {
  
  constructor(props) {
    super(props);
    this.state = this.props.navigation;
  }

  componentDidMount() {
    this.setState({ userinput: "", errordata: " ",dictionary_form : "", present : "", 
                                   negative_form : "",
                                   past_tense : "", past_negative : "",
                                   te_form : "", past_short : "",
                                   past_negative_short : "", 
                                   });
  }

  _resetForm() {
    this.setState({ dictionary_form : "", present : "", 
                    negative_form : "",
                    past_tense : "", past_negative : "",
                    te_form : "", past_short : "",
                    past_negative_short : "", 
                    });
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
      that.setState({result: data, errordata:"",
                     dictionary_form: data.dictionary_form,
                     present: data.present, negative_form: data.negative_form,
                     past_tense: data.past_negative, past_negative: data.past_negative,
                     te_form : data.te_form, past_short: data.past_short,
                     past_negative_short: data.past_negative_short,});
    })
  }; 

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
            Type a verb or adjective here and conjugation will be on the screen 
          </Text>
          <TextInput
          style={styles.input}
          value={this.state.userinput}
          placeholder="Type your verb/adjective here"
          editable={true}
          onChangeText={(text) => this.setState({userinput:text})}  
          />
          <TouchableOpacity style={styles.buttonBox} activeOpacity = {.5} 
                            onPress={() => {
                              this._resetForm();
                              if (verb_end.includes(this.state.userinput.charAt(this.state.userinput.length-1)))
                              {
                                actualLink = verbConvert + this.state.userinput;
                                this._fetchingInfo();
                              }
                              else if (adjective_end.includes(this.state.userinput.charAt(this.state.userinput.length-1)))
                              {
                                actualLink = adjectiveConvert + this.state.userinput;
                                this._fetchingInfo();
                              }
                              else
                              {
                                this.setState({errordata: "This is not a verb or adjective"});
                              }
                            }}>
              <Text>Confirm</Text>
          </TouchableOpacity>

          <Text style={styles.instruction}>
            {(this.state.result) ? "" : "Some instruction here"}
          </Text>
          <Text style={styles.instruction}>
            {(!this.state.errordata) ? 
            "Dictionary Form :" + this.state.dictionary_form + "\n" + 
            "Present Tense :" + this.state.present + "\n" + 
            "Past Tense :" + this.state.past_tense + "\n" + 
            "Past Negative : " + this.state.past_negative + "\n" +
            "Te-form : " + this.state.te_form + "\n" +
            "Past short : " + this.state.past_short + "\n" +
            "Past negative short : " + this.state.past_negative_short
            : this.state.errordata}
          </Text>
        </View>
      </View>
    );
  }
}


