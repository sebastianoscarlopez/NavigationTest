import { createStackNavigator } from 'react-navigation';
import {RecomendadosScreen, HomeScreen} from './screens';
export default createStackNavigator({
    Home: {
      title:'Home',
      screen: HomeScreen
    },
    Recomendados: {
      title:'Details',
      screen: RecomendadosScreen
    },
  })