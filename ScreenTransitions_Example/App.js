import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from "./src/components/Login"
import Home from "./src/components/Home"

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },

},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

const App = createAppContainer(MainNavigator);

export default App;