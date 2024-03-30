import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './components/signup';
import Login from './components/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'aliceblue', // Header background color
            },
            headerTintColor: 'black', // Header text color
            headerTitleStyle: {
              fontWeight: 'bold', // Header title text style
            },
          }}
        >
          <Stack.Screen
            name='Home'
            component={Signup}
            options={
              { title: 'Signup' } // Title for the Home screen
            }
          />
          <Stack.Screen
            name='Login'
            component={Login}
            options={
              { title: 'Login' } // Title for the Login screen
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
