import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import Search from '../components/Search';


class Map extends Component {

 state = {
     region: null
 }

    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                console.log(latitude)
                console.log(longitude)
                console.log("succesfully got user's region")
                this.setState({
                        region: {
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: 0.0143,
                            longitudeDelta: 0.0134
                        }
                })
            },
            () => { console.log("not able to get user's region")},

            {
                timeout: 5000,
                enableHighAccuracy: true
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
                <Search />  
            </View>
        );
    }
}

export default Map;
