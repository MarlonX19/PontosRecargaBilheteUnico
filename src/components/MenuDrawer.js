import React, { Component } from 'react';
import { Platform, Image, Dimensions, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Geocoder from 'react-native-geocoding'
import firebase from 'firebase';

import {data} from '../../sensibleData'


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class MenuDrawer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pontos: data,

            teste: [],
            colorInt: 0
        }
    }

    componentWillMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyC_SCYnIm2fMh35xwIls7j2IP1d3q1Bxgk",
            authDomain: "pontosderecarga-65918.firebaseapp.com",
            databaseURL: "https://pontosderecarga-65918.firebaseio.com",
            projectId: "pontosderecarga-65918",
            storageBucket: "",
            messagingSenderId: "405018465778",
            appId: "1:405018465778:web:21189d4681ccab3eae476b",
            measurementId: "G-S1YYB3G7FL"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }

    componentDidMount() {
      // to do only once
        Geocoder.init('AIzaSyBhAwIwcJLk10RVN1eQIWGiESlcZZnFjcE'); // use a valid API key

        var temp = []

        this.state.pontos.forEach(element => {
            console.log(element.properties.Field2 + element.properties.Field3)

            Geocoder.from(element.properties.Field2)
                .then(json => {
                    var location = json.results[0].geometry.location;
                    console.log(location);
                    temp.push({ located: { location }, name: element.properties.Field8, desc: element.properties.Field6, endereco: element.properties.Field2, bairro: element.properties.Field3 })
                    console.log(temp)
                })
                .catch(error => console.warn(error));
        });

        this.setState({ teste: temp })

    }


    navLinkHome(nav, text) {
        return (
            <TouchableOpacity
                style={{ height: 50, backgroundColor: this.state.colorInt++ % 2 == 0 ? '#A9DAD6' : '#e3f1f1' }}
                onPress={() => this.props.navigation.navigate(nav, { test: this.state.teste })}
            >
                <View style={styles.wrapOptions}>
                    <Image style={styles.optionImage} source={require('../assets/imgs/Home.png')} />
                    <Text style={styles.link}>{text}</Text>
                </View>
            </TouchableOpacity>
        )

    }

    navLinkMap(nav, text) {
        return (
            <TouchableOpacity
                style={{ height: 50, backgroundColor: this.state.colorInt++ % 2 == 0 ? '#A9DAD6' : '#e3f1f1' }}
                onPress={() => this.props.navigation.navigate(nav, { test: this.state.teste })}
            >
                <View style={styles.wrapOptions}>
                    <Image style={styles.optionImage} source={require('../assets/imgs/Map.png')} />
                    <Text style={styles.link}>{text}</Text>
                </View>
            </TouchableOpacity>
        )

    }

    navLinkDoubts(nav, text) {
        return (
            <TouchableOpacity
                style={{ height: 50, backgroundColor: this.state.colorInt++ % 2 == 0 ? '#A9DAD6' : '#e3f1f1' }}
                onPress={() => this.props.navigation.navigate(nav, { test: this.state.teste })}
            >
                <View style={styles.wrapOptions}>
                    <Image style={styles.optionImage} source={require('../assets/imgs/doubtsIcon.png')} />
                    <Text style={styles.link}>{text}</Text>
                </View>
            </TouchableOpacity>
        )

    }

    navLinkAbout(nav, text) {
        return (
            <TouchableOpacity
                style={{ height: 50, backgroundColor: this.state.colorInt++ % 2 == 0 ? '#A9DAD6' : '#e3f1f1' }}
                onPress={() => this.props.navigation.navigate(nav, { test: this.state.teste })}
            >
                <View style={styles.wrapOptions}>
                    <Image style={styles.optionImage} source={require('../assets/imgs/about.png')} />
                    <Text style={styles.link}>{text}</Text>
                </View>
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
                        {this.navLinkHome('Home', 'Início')}
                        {this.navLinkMap('Map', 'Ver mapa')}
                        {this.navLinkDoubts('Doubts', 'Dúvidas')}
                        {this.navLinkAbout('About', 'Sobre')}
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold' }}>Pontos de recarga</Text>
                    <Text style={{ fontSize: 14, textAlign: 'right', fontWeight: 'bold' }}>v 1.2</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C0C0C0',
    },

    topLinks: {
        height: 160,
        backgroundColor: 'lightgrey'
    },

    bottomLinks: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 1,
        paddingBottom: 400
    },

    wrapOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    optionImage: {
        height: 20,
        width: 20,
        marginLeft: 10
    },

    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 10,
        margin: 5,
        textAlign: 'left'
    },

    footer: {
        height: 50,
        borderTopWidth: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#e3f1f1'
    }

});

export default MenuDrawer;
