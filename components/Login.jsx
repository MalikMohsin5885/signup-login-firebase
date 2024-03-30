
import React, { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login() {// component is being used as a screen component in a React Navigation stack navigator. When a component is a screen in a navigator, it automatically receives the navigation prop from React Navigation.

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  function handleChange(name, text) {
    setUserData({
      ...userData,
      [name]: text
    });
  }

  useEffect(()=>{
    AsyncStorage.getItem('data').then((movies)=>{
      console.log("in login controller");
      console.log(movies);
    })
  })

  const handleLogin = async () => {
    console.log('Handle Log In')
    
    await signInWithEmailAndPassword(auth,userData.email, userData.password)
      .then((userCredential) => {
        console.log("user data,", userCredential.user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />


      <View style={styles.center}>
        {/* Use the CustomTextField component here */}
        <TextInput
          placeholder="Email Address"
          onChangeText={(text) => handleChange("email", text)}
          value={userData.email}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          onChangeText={(text) => handleChange("password", text)}
          value={userData.password}
          keyboardType="default"
          secureTextEntry={true}
        />
        <Button
          onPress={handleLogin}
          title="LOGIN"
          color=""
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

      <View style={styles.bottom}>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    textInput: {
      borderColor: 'black'
    },
    center: {
      flex: 6,
      backgroundColor: 'aliceblue',
      gap:20,
      padding: 30
    },
  });
