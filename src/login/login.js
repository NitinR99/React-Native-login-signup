import React, { Component, useState } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, TouchablHighlight, Alert, KeyboardAvoidingView, Modal} from 'react-native';
import { Button, CheckBox, Divider } from 'react-native-elements';


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
            <Divider style={{ backgroundColor: 'orange', padding:1, margin:'10%' }} />
		<Text style={{textAlign:'center', fontSize: 20}}>   New here?</Text>
		<Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed.");
		this.setModalVisible(false);
          }}
        >
          <View style={[styles.centeredView, this.state.modalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']}>
          <View style={styles.modalView}>
            <Text style={styles.logoText}>Sign Up</Text>
		<TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.signupFormTextInput} />
            	<TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.signupFormTextInput} secureTextEntry={true}/>
		<TextInput placeholder="Repeat Password" placeholderColor="#c4c3cb" style={styles.signupFormTextInput} secureTextEntry={true}/>
		<CheckBox
  			center
 			 title='I have read and I accept the terms and conditions'
				style={styles.signupFormcheckbox}
 			 checkedIcon='dot-circle-o'
  			uncheckedIcon='circle-o'
  			checked={this.state.checked}
			onPress={() => this.setState({checked: !this.state.checked})}
		/>
		<Button
              buttonStyle={styles.registerButton}
              onPress={() => {
                  this.setModalVisible(false);
			console.log('register the user');
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