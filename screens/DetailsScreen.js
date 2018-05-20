import React from 'react';
import { Text, View, Button } from 'react-native';
import Sum from '../components/sum';
export default class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen {Sum(1,2)}</Text>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.push('Details')}
          />
        </View>
      );
    }
  }
