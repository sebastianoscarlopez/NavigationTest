import React from 'react';
import { Text, View, Button } from 'react-native';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>BIBLIOTECA</Text>
        <Button
          title="Leidos"
          onPress={() => this.props.navigation.navigate('Leidos')}
        />
        <Button
          title="Recomendados"
          onPress={() => this.props.navigation.navigate('Recomendados')}
        />
      </View>
    );
  }
}