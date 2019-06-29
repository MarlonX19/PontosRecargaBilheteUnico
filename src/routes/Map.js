import React, { Component, Fragment } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

import Search from '../components/Search';
import Directions from '../components/Directions';

class MapScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Ver mapa',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/imgs/Map.png')}
            style={{ width: 15, height: 15 }}
          />
        ),
      };

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


    handleLocationSelected = (data, { geometry }) => {
        const { location: {lat: latitude, lng: longitude } } = geometry;

        this.setState({ 
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text
            }
         })
            console.log(this.state.destination)
    }

    render() {
        const { region, destination } = this.state;
        const { navigation } = this.props;
        const test = navigation.getParam('test')
        console.log(test)
        return (
            <View style={{ flex: 1 }}>
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
                        />
                    ))}

                </MapView>
                <Search onLocationSelected={this.handleLocationSelected} />
            </View>
        );
    }
}

export default MapScreen;
