import React, { Component } from 'react';
import {Platform, Image, Dimensions, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Geocoder from 'react-native-geocoding';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class MenuDrawer extends Component {

    constructor(props){
        super(props)
        this.state ={
            pontos: [
                {
                    "type": null,
                    "properties": {
                      "Field1": "APARECIDA",
                      "Field2": "AVENIDA Júlio Prestes, S/N, Centro",
                      "Field3": "Centro",
                      "Field4": "APARECIDA",
                      "Field5": "01257‐900",
                      "Field6": "COMUM",
                      "Field7": "SANTUARIO NACIONAL DE NOSSA SENHORA DA CONCEICAO APARECIDA",
                      "Field8": "SANTUARIO NACIONAL DE NOSSA SENHORA DA CONCEICAO APARECIDA",
                      "Field9": "Auto Atendimento (Máquinas)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "ARUJA",
                      "Field2": "AVENIDA Joao Manoel, 150, BOX 52",
                      "Field3": "Centro",
                      "Field4": "ARUJA",
                      "Field5": "07400‐605",
                      "Field6": "COMUM",
                      "Field7": "ARUJA AUDIO E VIDEO",
                      "Field8": "ARUJA AUDIO E VIDEO",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA Ismael Neri, 810  0",
                      "Field3": "Agua Fria",
                      "Field4": "ZONA NORTE",
                      "Field5": "02335‐001",
                      "Field6": "COMUM",
                      "Field7": "BANCA LANTERNA",
                      "Field8": "BANCA LANTERNA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA MARIA AMALIA LOPES AZEVEDO 281",
                      "Field3": "VILA ALBERTINA",
                      "Field4": "ZONA NORTE",
                      "Field5": "02350‐000",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIARIO‐LIVRE",
                      "Field7": "CHAVEIRO",
                      "Field8": "CHAVEIRO NUNES",
                      "Field9": "Recarga Assistida"
                    }
                  }
                ],

            teste: [],
            colorInt: 0
        }
    }

    componentDidMount() {
        // to do only once
        Geocoder.init('AIzaSyBhAwIwcJLk10RVN1eQIWGiESlcZZnFjcE'); // use a valid API key

        var temp = []

        this.state.pontos.forEach(element => {
            console.log(element.properties.Field2 + element.properties.Field2)

            Geocoder.from(element.properties.Field2)
            .then(json => {
                var location = json.results[0].geometry.location;
                console.log(location);
                temp.push({located: {location}, name: element.properties.Field8, desc: element.properties.Field6 })
                console.log(temp)
            })
            .catch(error => console.warn(error));
        });

        this.setState({ teste: temp })

    }


    navLinks(nav, text) {
        return (
            <TouchableOpacity
                style={{ height: 50, backgroundColor: this.state.colorInt++ % 2 == 0 ? '#A9DAD6' : '#e3f1f1' }}
                onPress={() => this.props.navigation.navigate(nav, { test: this.state.teste })}
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
