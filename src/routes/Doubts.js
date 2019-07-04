import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { Container, Header, Content, Accordion, Icon } from 'native-base';

import MenuButton from '../components/MenuButton';

const dataArray = [
    { title: "Para qual cidade há informações disponíveis?", content: "O aplicativo mostra apenas os pontos comercial que efetuam recarga para o bilhete único de São Paulo" },
    { title: "Todos os pontos listados são confiáveis?", content: "A princípio sim, pois estão registrados junto à SPTrans por meio de empresas credenciadas também pela SPTrans, no entanto sempre confira os dados nos comprovantes emitidos para ter certeza da autenticidade da recarga. Cuidado nunca é demais" },
    { title: "Porque conferir os dados do comprovante?", content: "Nada impede que o estabelecimento, além de ter a máquina credenciada tenha também um sistema clandestino" },
    { title: "Que dados do comprovante preciso verificar?", content: "Verifique o NSU e o número do bilhete, basta inserir esses dados no sistema online da SPTrans para para confirmar se a recarga feita é autêntica ou não" },
    { title: "Em qual sistema verifico a autenticidade?", content: "Basta acessar o site http://sptrans.com.br/recibo e selecionar o sistema credenciado onde a recarga foi feita, e na tela que abrir vai ser pedido para inserir o NSU da recarga ou o número do bilhete único ou, ainda, ambos. Caso a recarga seja autência o sistema deve retornar a segunda vida do comprovante, do contrário vai informar que não foi encontrado nenhum dado" },
    { title: "O que fazer se descobrir um ponto cladestino?", content: "Denuncie ligando para o 156" },
    { title: "Os dados são atualizados?", content: "As informações dos pontos provém da própria SPTrans, nossa equipe trabalha para manter as informações atualizadas sempre que possível" }
];


class Doubts extends Component {

    _renderHeader(item, expanded) {
        return (
            <View style={{
                flexDirection: "row",
                padding: 20,
                margin: 10,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#A9DAD6"
            }}>
                <Text style={{ fontWeight: "600" }}>
                    {" "}{item.title}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18 }} name="arrow-up" />
                    : <Icon style={{ fontSize: 18 }} name="arrow-down" />}
            </View>
        );
    }

    _renderContent(item) {
        if (item.content.includes('http://sptrans.com.br/recibo')) {
            return (
                <Text style={{ margin: 10, backgroundColor: "#e3f1f1", padding: 10 }}>Basta acessar o site <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('http://sptrans.com.br/recibo')}> http://sptrans.com.br/recibo</Text> e selecionar o sistema credenciado onde a recarga foi feita, e na tela que abrir vai ser pedido para inserir o NSU da recarga ou o número do bilhete único ou, ainda, ambos. Caso a recarga seja autência o sistema deve retornar a segunda vida do comprovante, do contrário vai informar que não foi encontrado nenhum dado</Text>
            )
        }

        else {
            return (
                <Text style={{ margin: 10, backgroundColor: "#e3f1f1", padding: 10 }}>{item.content}</Text>
            );
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#e3f1f1"
                />
                <View style={{ flex: 1 }}>
                    <MenuButton navigation={this.props.navigation} screenTitle='Dúvidas' />
                </View>
                <View style={{ flex: 9 }}>
                    <ScrollView>
                        <Accordion dataArray={dataArray}
                            icon='arrow-down'
                            expandedIcon='arrow-up'
                            iconStyle={{ color: "green" }}
                            expandedIconStyle={{ color: "red" }}
                            animation={true}
                            expanded={true}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent} />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    titleView: {
        borderRadius: 10,
        elevation: 3,
        margin: 5,
        backgroundColor: 'lightgrey'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 10,
        color: 'black',
        marginBottom: 10
    },

    item: {
        fontSize: 15,
        fontWeight: '400',
        marginLeft: 10,
        color: 'grey',
        marginBottom: 15
    }
});

export default Doubts;
