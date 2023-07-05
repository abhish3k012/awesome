import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Contact from './src/contact';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Singup from './src/singup';
import DashBoard from './src/DashBoard';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="singup">
          <Stack.Screen name="Home" component={Contact} />
          <Stack.Screen name="singup" component={Singup} />
          <Stack.Screen name="dashBoard" component={DashBoard} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
