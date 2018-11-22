import React, { PureComponent } from 'react';
import { AlertIOS, Image, Text, TouchableHighlight, View } from 'react-native';
import TouchID from 'react-native-touch-id';



const optionalConfigObject = {
    title: "Authentication Required", // Android
    color: "white", // Android,
    fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
  }

export default class Login extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isLocked: true
        };
    }



    pressHandler() {
        TouchID.authenticate('to access DatAnchor mobile console', optionalConfigObject)
          .then(success => {
            //AlertIOS.alert('Authenticated Successfully');
            this.setState({ isLocked: false });
            this.props.navigation.navigate('App');

          })
          .catch(error => {
              console.log(JSON.stringify(error, null, 2));
            AlertIOS.alert('Authentication Failed');
          });
      }



    render() {
            return (
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: 'white'}}>
                    <View>
                        <Image source={require('../assets/logo.png')} style={{width: 140, height:200}}/>
                        <Text style={{
                            fontSize: 28,
                            textAlign: 'center',
                            width: '100%',
                            color: '#3d79ff',
                            fontWeight: 'bold'
                            }}>DatAnchor</Text>
                    </View>
                    <TouchableHighlight onPress={this.pressHandler.bind(this)}>
                        <View style={{alignItems: 'center', textAlign: 'center'}}>
                            <Image source={require('../assets/touchid.png')} style={{width: 60, height:60}}/>
                            <Text style={{textAlign: 'center', fontSize: 18, color: 'blue'}}>
                                Authenticate
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            )
    }



}