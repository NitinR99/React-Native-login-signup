import React, { Component, useState } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, TouchablHighlight, Alert, KeyboardAvoidingView, Modal} from 'react-native';
import { Button } from 'react-native-elements';


export default class LoginScreen extends Component {
 state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  render() {
	
const { modalVisible } = this.state;
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>

          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Welcome</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Login"
            />
            
		<Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={[styles.centeredView, this.state.modalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']}>
          <View style={styles.modalView}>
            <Text style={styles.logoText}>Sign Up</Text>
		<TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.signupFormTextInput} />
            	<TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.signupFormTextInput} secureTextEntry={true}/>
		<Button
              buttonStyle={styles.registerButton}
              onPress={() => {
                  this.setModalVisible(false);
                }}
              title="Register"
            />
            
          </View>
        </View>
      </Modal>

            <Button
              buttonStyle={styles.signupButton}
              onPress={() => {
                  this.setModalVisible(true);
                }}
              title="Sign up"
            />
                
              
            
       
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {
	console.log('login procedures');
  }
onsignupPress() {
	console.log('sign up procedures');
  }
  
  
}