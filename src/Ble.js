import React, { PureComponent } from 'react';
import { NativeModules, StyleSheet, Switch, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default class Ble extends PureComponent {

    static navigationOptions = {
        tabBarLabel: 'BLE',
        tabBarIcon: ({ focused, tintColor }) => {
            const iconName = `ios-switch`;
            return <Icon name={iconName} size={focused ? 36 : 32} color={tintColor} />;
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            isOn: false
        }
    }

    componentDidMount() {
        //NativeModules.DAtAnchorBLE.sayHello();
        NativeModules.DAtAnchorBLEManager.startBLEServer(v => {
            console.log('CALLED START', v);
        });


    }

    render() {
        return (
            <View style={s.container}>
                <Switch
                    value={this.state.isOn}
                    style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
                    onValueChange={() => this.setState({isOn: !this.state.isOn})} />
                <Text style={{paddingVertical: 40, fontWeight: 'bold', color: this.state.isOn ? 'green' : 'red'}}>{`BLE Server is ${this.state.isOn ? 'ON' : 'OFF'}`}</Text>

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