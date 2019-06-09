import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={{flex: 1}}
                    region={{
                        latitude: -22.365275 ,
                        longitude: -47.368312,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                    }}
                    showsUserLocation
                    loadingEnabled
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

//make this component available to the app
export default Index;
