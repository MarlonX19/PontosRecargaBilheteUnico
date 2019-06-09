import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


class Map extends Component {

    state = {
        region: null
    }

    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                this.setState({
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                    }
                })
            },
            () => {},

            {
                timeout: 5000,
                enableHighAccuracy: true,
                maximumAge: 1000
            }
        )
    }

    render() {

        const { region } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={region}
                    showsUserLocation
                    loadingEnabled
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    }
});

export default Map;
