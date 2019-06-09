import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


import Map from './routes/Map';


class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Map />
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
