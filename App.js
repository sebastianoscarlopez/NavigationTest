import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {DetailsScreen, HomeScreen} from './screens/index';

const RootStack = createStackNavigator({
  Home: {
    title:'Home',
    screen: HomeScreen
  },
  Details: {
    title:'Details',
    screen: DetailsScreen
  },
})

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}
