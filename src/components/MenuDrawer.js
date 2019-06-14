import React, { Component } from 'react';
import {Platform, Image, Dimensions, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

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
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.topLinks}>
                        <Image style={{ height: 160, width: WIDTH * 0.74, }} source={require('../assets/imgs/SPTransCard.jpg')} />
                    </View>
                    <View style={styles.bottomLinks}>
                        {this.navLinks('Home', 'Início')}
                        {this.navLinks('Map', 'Ver mapa')}
                        {this.navLinks('Doubts', 'Dúvidas')}
                        {this.navLinks('Policy', 'Política de uso')}
                        {this.navLinks('About', 'Sobre')}
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold' }}>Pontos de recarga</Text>
                    <Text style={{ fontSize: 14, textAlign: 'right', fontWeight: 'bold' }}>v 1.1</Text>
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
        backgroundColor: 'lightgrey'
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
        textAlign: 'left',
    },

    footer: {
        height: 50,
        borderTopWidth: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }

});

export default MenuDrawer;
