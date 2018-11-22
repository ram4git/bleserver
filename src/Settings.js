import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import App from '../App';


export default class Settings extends PureComponent {

    static navigationOptions = {
        tabBarLabel: 'Settings',

        tabBarIcon: ({ focused, tintColor }) => {
            const iconName = `ios-settings`;
            return <Icon name={iconName} size={focused ? 36 : 32} color={tintColor} />;
        },
    };

    render() {
        return (
            <App />
        )
    }


}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});