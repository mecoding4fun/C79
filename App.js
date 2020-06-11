import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import ExchangeScreen from './Screens/ExchangeScreen';
import HomeScreen from './Screens/HomeScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator,createAppContainer}  from 'react-navigation';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home:{screen:HomeScreen},
  Exchange:{screen:ExchangeScreen}
})
const SwitchNavigator = createSwitchNavigator({
WelcomeScreen:{screen:WelcomeScreen},
TabNavigator:{screen:TabNavigator}
})
const AppContainer = createAppContainer(SwitchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
