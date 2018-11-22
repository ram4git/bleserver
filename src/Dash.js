import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Dash extends PureComponent {

    static navigationOptions = {
        tabBarLabel: 'Dashboard',

        tabBarIcon: ({ focused, tintColor }) => {
            const iconName = `ios-grid`;
            return <Icon name={iconName} size={focused ? 36 : 32} color={tintColor} />;
        },
    };

    render() {
        return (
            <View style={s.container}>
                <Text>Dashboards Come here</Text>
            </View>
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