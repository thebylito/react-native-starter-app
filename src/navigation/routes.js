import { StackNavigator } from 'react-navigation';

// Pages
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Routes = StackNavigator({
  homeScreen: { screen: HomeScreen },
});

export default Routes;
