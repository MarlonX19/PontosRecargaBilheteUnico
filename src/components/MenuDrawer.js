import React, { Component } from 'react';
import {Platform, Dimensions, View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class MenuDrawer extends Component {
    navLinks(nav, text) {
        return (
            <TouchableOpacity
                style={{ height: 50 }}
                onPress={() => this.props.navigation.navigate(nav)}
            >
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topLinks}>
                    <Text style={{ paddingTop: 40, color: '#fff' }}>Menu Drawer</Text>
                </View>
                <View style={styles.bottomLinks}>
                    {this.navLinks('Home', 'Início')}
                    {this.navLinks('Map', 'Ver mapa')}
                    {this.navLinks('About', 'Sobre')}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },

    topLinks: {
        height: 160,
        backgroundColor: 'black'
    },

    bottomLinks: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingBottom: 400
    },

    link: { 
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 10,
        margin: 5,
        textAlign: 'left'
    }
});

export default MenuDrawer;
