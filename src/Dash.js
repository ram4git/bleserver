import React, { PureComponent } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, WebView } from 'react-native';
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
            <SafeAreaView>
                <ScrollView style={{backgroundColor: '#c7ecee'}}>
                    <View style={s.chart}>
                        <Text style={s.text}>Chart #1</Text>
                        <WebView
                            originWhitelist={['*']}
                            source={{ html: '<iframe src="https://play.grafana.org/d-solo/000000012/grafana-play-home?orgId=1&panelId=3&from=1543183722335&to=1543190922335&theme=light" width="100%" height="450" frameborder="0"></iframe>' }}
                        />
                    </View>

                    <View style={s.chart}>
                        <Text style={s.text}>Chart #2</Text>
                        <WebView
                            originWhitelist={['*']}
                            source={{ html: '<iframe src="https://play.grafana.org/d-solo/000000012/grafana-play-home?orgId=1&panelId=5&from=1543184977249&to=1543192177249&theme=light" width="100%" height="450" frameborder="0"></iframe>' }}
                        />
                    </View>

                    <View style={s.chart}>
                        <Text style={s.text}>Chart #3</Text>
                        <WebView
                            originWhitelist={['*']}
                            source={{ html: '<iframe src="https://play.grafana.org/d-solo/000000016/graph-styles?orgId=1&panelId=17&theme=light" width="100%" height="450"  frameborder="0"></iframe>' }}
                        />
                    </View>
                    <View style={s.chart}>
                        <Text style={s.text}>Flags</Text>
                        <WebView
                            originWhitelist={['*']}
                            source={{ html: '<iframe src="https://play.grafana.org/d-solo/000000074/alerting?orgId=1&panelId=3&theme=light" width="100%" height="450" frameborder="0"></iframe>' }}
                        />
                    </View>
                    <View style={s.chart}>
                        <Text style={s.text}>Meter</Text>
                        <WebView
                            originWhitelist={['*']}
                            source={{ html: '<iframe src="https://play.grafana.org/d-solo/000000003/big-dashboard?orgId=1&panelId=22&from=1543190118331&to=1543193718331&theme=light" width="100%" height="450" frameborder="0"></iframe>' }}
                        />
                    </View>
                    <View style={s.chart}>
                        <Text style={s.text}>Pie Chart</Text>
                        <WebView
                            originWhitelist={['*']}
                            source={{ html: '<iframe src="https://play.grafana.org/d-solo/AO7AU_vmz/pie-chart-153?orgId=1&panelId=2&theme=light" width="100%" height="450"frameborder="0"></iframe>' }}
                        />
                    </View>

                </ScrollView>
            </SafeAreaView>
        )
    }


}

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    chart: {
        width: '100%-12',
        height: 200,
        backgroundColor: 'white',
        margin: 6,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 4,
        borderRadius: 4,
    },
    text: {
        textAlign: 'center',
        color: 'blue',
        marginVertical: 4
    }
});