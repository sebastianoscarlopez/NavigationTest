import React from 'react';
import { Text } from 'react-native';

export const suma = (a, b) => a + b;  
export const lista = ({item}) => <Text>{item.titulo}</Text>;
export const TraerRecomendados = () => [
        {key: '1', titulo:'Diccionarios'},
        {key: '2', titulo:'Enciclopedia'},
        {key: '3', titulo:'ReactNative para Dummies'},
        {key: '4', titulo:'Redux'}
      ];








