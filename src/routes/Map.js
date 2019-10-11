import React, { Component, Fragment } from 'react';
import { View, Image, Text, StyleSheet, StatusBar, Clipboard, ToastAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

import Search from '../components/Search';
import Directions from '../components/Directions';
import markerImage from '../assets/imgs/gps.png';

class MapScreen extends Component {

    state = {
        region: null,
        destination: null
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
                    },

                    clipboardContent: null
                })
            },
            () => { console.log("not able to get user's region") },

            {
                timeout: 5000,
                enableHighAccuracy: true
            }
        )

    }


    handleLocationSelected = async (data, { geometry }) => {
        const { location: { lat: latitude, lng: longitude } } = geometry;

        this.setState({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text
            }
        })
        console.log(this.state.destination)
    }


     writeToClipboard = async (markerEndereco, markerBairro) => {
        //To copy the text to clipboard
        await Clipboard.setString(markerEndereco + " " + markerBairro);
        ToastAndroid.showWithGravityAndOffset(
            'Endereço copiado!',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            150,
          );
      };

    render() {
        const { region, destination } = this.state;
        const { navigation } = this.props;
        const test = navigation.getParam('test')
        console.log(test)
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#e3f1f1"
                />
                <MapView
                    style={{ flex: 1 }}
                    region={region}
                    showsUserLocation
                    loadingEnabled
                    ref={el => this.MapView = el}
                >

                    {destination && (
                        <Fragment>
                            <Directions
                                origin={region}
                                destination={destination}
                                onReady={(result) =>
                                    this.MapView.fitToCoordinates(result.coordinates)}
                            />
                            <Marker
                                coordinate={destination}
                            />
                        </Fragment>
                    )}

                    {test.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: marker.located.location.lat,
                                longitude: marker.located.location.lng,
                            }
                            }
                            title={marker.name}
                            description={marker.desc}
                            anchor={{ x: 0, y:0 }}
                            image={markerImage}
                            onPress={() => this.writeToClipboard(marker.endereco, marker.bairro)}
                        />
                    ))}

                </MapView>
                <Search onLocationSelected={this.handleLocationSelected} />
            </View>
        );
    }
}

export default MapScreen;
