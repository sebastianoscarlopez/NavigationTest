import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import {lista, TraerRecomendados} from '../components/llamarLibros';
export default class RecomendadosScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Recomendados</Text>
          <FlatList
            data= {TraerRecomendados()} 
            
            renderItem= {lista}

            />


        </View>
      );
    }
  }
