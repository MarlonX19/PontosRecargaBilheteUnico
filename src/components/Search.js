import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';


class Search extends Component {
    render() {
        return (
           <GooglePlacesAutocomplete
                placeholder="Onde você vai?"
                placeholderTextColor="#333"
                onPress={() => false}
                query={{
                    key: 'AIzaSyBhAwIwcJLk10RVN1eQIWGiESlcZZnFjcE',
                    language: 'pt'
                }}
                textInputProps={{
                    autoCapitalize: 'none',
                    autoCorrect: false
                }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                styles={{
                    container: {
                        position: 'absolute',
                        top: Platform.select({ ios: 60, android: 30 }),
                        width: '100%'
                    },
                  
                }}
           />
        )
    }
}

export default Search;
