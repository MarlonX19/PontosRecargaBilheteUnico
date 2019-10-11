import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

class MenuButton extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ flex: 0.3, paddingLeft: 5 }}>
                    <TouchableWithoutFeedback
                        onPress={() => this.props.navigation.toggleDrawer()}
                    >
                        <Image style={{ width: 32, height: 32 }}
                            source={require('../assets/imgs/iconDrawer.png')}
                        />

                    </TouchableWithoutFeedback>
                </View>
                <View style={{ flex: 1.7 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'auto'}}>{this.props.screenTitle}</Text>
                </View>
            </View>
        );
    }
}

export default MenuButton;
