import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';


class Search extends Component {
    state = {
        isSearchFocused: false
    }

    render() {

        const { isSearchFocused } = this.state;
        const { onLocationSelected } = this.props;


        return (
           <GooglePlacesAutocomplete
                placeholder= 'Aonde voce vai?'
                placeholderTextColor="#333"
                onPress={onLocationSelected}
                query={{
                    key: 'AIzaSyBhAwIwcJLk10RVN1eQIWGiESlcZZnFjcE',
                    language: 'pt'
                }}
                textInputProps={{
                    onFocus: () => { this.setState({ isSearchFocused: true }) },
                    onBlur: () => { this.setState({ isSearchFocused: false }) },
                    autoCapitalize: 'none',
                    autoCorrect: false
                }}
                fetchDetails
                enablePoweredByContainer={false}
                listViewDisplayed={isSearchFocused}
                styles={{
                    container: {
                        position: 'absolute',
                        top: Platform.select({ ios: 60, android: 30 }),
                        width: '100%'
                    },
                    textInputContainer: {
                        flex: 1,
                        backgroundColor: 'transparent',
                        height: 54,
                        marginHorizontal: 20,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                    },
                    textInput: {
                        height: 54,
                        margin: 0,
                        borderRadius: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingLeft: 15,
                        paddingRight: 15,
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        elevation: 5,
                        shadowColor: "#000",
                        shadowOpacity: 0.1,
                        shadowOffset: {x: 0, y: 0},
                        shadowRadius: 15,
                        borderWidth: 1,
                        borderColor: "#DDD",
                        fontSize: 18
                    },
                    listView: {
                        borderWidth: 1,
                        borderColor: "#DDD",
                        backgroundColor: "#FFF",
                        marginHorizontal: 20,
                        elevation: 5,
                        shadowColor: "#000",
                        shadowOpacity: 0.1,
                        shadowOffset: {x: 0, y: 0},
                        shadowRadius: 10,
                        marginTop: 5
                    },
                    description: {
                        fontSize: 14
                    },
                    row: {
                        padding: 10,
                        height: 50
                    }
                  
                }}
           />
        )
    }
}

export default Search;
