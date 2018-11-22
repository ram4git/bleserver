import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Ble from './src/Ble';
import Dash from './src/Dash';
import DocViewer from './src/DocViewer';
import Login from './src/Login';
import Settings from './src/Settings';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

// const AppStack = createStackNavigator({ Home: App }, {
//   headerMode: 'none',
//   navigationOptions: {
//       headerVisible: false,
//   }
// });
const AuthStack = createStackNavigator({ Login: Login }, {
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
});


const AppStack = createBottomTabNavigator({
  Ble: {
    screen: Ble,
    tabBarLabel: 'BLE'
  },
  Docs: {
    screen: DocViewer,
    tabBarLabel: 'Docs'
  },
  Dash: {
    screen: Dash,
    tabBarLabel: 'Dashboard'
  },
  Settings: {
    screen: Settings,
    tabBarLabel: 'Settings'
  }
},{
  tabBarOptions: {
    activeTintColor: '#3d79ff',
    inactiveTintColor: 'grey',
    showLabel: true,
  },
}


);


export default createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'App',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }
)