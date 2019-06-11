import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import Search from '../components/Search';


class MapScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Ver mapa',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/imgs/mapIcon.png')}
            style={{color: 'grey', width: 20, height: 20}}
          />
        ),
      };

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
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: 37.4203085,
                            longitude: -122.0859565
                        }}
                        title={"Test"}
                        description={"this is a test only"}
                    />
                </MapView>
                <Search />
            </View>
        );
    }
}

export default MapScreen;
