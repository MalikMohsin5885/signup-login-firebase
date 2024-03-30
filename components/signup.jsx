import React, { useState, useLayoutEffect, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

import AsyncStorage from '@react-native-async-storage/async-storage';
import useGetApiHook from './useGetApiHook';

export default function Signup() {
  const navigation = useNavigation();

  const {data} = useGetApiHook();

  useEffect(()=>{
    console.log("calling get api and stores that in local db")
    AsyncStorage.setItem('data',JSON.stringify(data))
  },[data])

  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    country: "",
    city: "",
    email: "",
    password: "",
    cnfPassword: ""
  });

  function handleChange(name, text) {
    setUserData({
      ...userData,
      [name]: text
    });
  }

  const handleSignup = async () => {

    console.log('LOGGED signup')

    await createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        console.log("Succesfull", userCredential);
        navigation.navigate('Login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log('Error Message == ', errorMessage)
      });

  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.center}>        
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
          onPress={handleSignup}
          title="SIGNUP"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
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
