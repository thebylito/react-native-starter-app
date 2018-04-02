import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const Router = StackNavigator({
  homeScreen: { screen: HomeScreen }
});

export default Router;
