import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Ble from './src/Ble';
import Dash from './src/Dash';
import DocViewer from './src/DocViewer';
import Login from './src/Login';
import PdfViewer from './src/PdfViewer';
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


const ViewerStack = createStackNavigator({
  Docs: DocViewer,
  Pdfs: PdfViewer
 }, {
  headerMode: 'screen',
  initialRouteName: 'Docs',
});


const AppStack = createBottomTabNavigator({
  Ble: {
    screen: Ble,
    tabBarLabel: 'BLE'
  },
  Docs: {
    screen: ViewerStack,
    tabBarLabel: 'Docs',
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => <Icon name='ios-filing' size={focused ? 36 : 32} color={tintColor} />
    }
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