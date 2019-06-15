import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList, Clipboard } from 'react-native';

import MenuButton from '../components/MenuButton';


class Doubts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                { title: 'Para qual cidade está disponível as informações?', data: 
                ['O aplicativo mostra apenas os pontos comercial que efetuam recarga para o bilhete único de São Paulo'] },

                { title: 'Todos os pontos listados são confiáveis?', data: 
                ['A princípio sim, pois estão registrados junto à SPTrans por meio de empresas credenciadas também pela SPTrans, no entanto sempre confira os dados nos comprovantes emitidos para ter certeza da autenticidade da recarga. Cuidado nunca é demais'] },
                
                { title: 'Se os pontos são confiáveis porque preciso conferir os dados do comprovante?', data:
                ['Nada impede que o estabelecimento, além de ter a máquina credenciada tenha também um sistema clandestino'] },

                { title: 'Que dados do comprovnate preciso verificar?', data:
                ['Verifique o NSU e o número do bilhete, basta inserir esses dados no sistema online da SPTrans para para confirmar se a recarga feita é autêntica ou não'] },

                { title: 'Em qual sistema insiro os dados para confirmar a autenticidade?', data:
                ['Basta acessar o site http://sptrans.com.br/recibo e selecionar o sistema credenciado onde a recarga foi feita, e na tela que abrir vai ser pedido para inserir o NSU da recarga ou o número do bilhete único ou, ainda, ambos. Caso a recarga seja autência o sistema deve retornar a segunda vida do comprovante, do contrário vai informar que não foi encontrado nenhum dado'] },

                { title: 'O que faço se descobrir um ponto de recarga que esteja fraudando o sistema?', data:
                ['Denuncie ligando para o 156'] },

                { title: 'Os dados dos pontos credenciados são atualizados?', data:
                ['As informações dos pontos provém da própria SPTrans, nossa equipe trabalha para manter as informações atualizadas sempre que possível'] },

            ]
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <MenuButton navigation={this.props.navigation} />
                </View>

                <View style={{ flex: 9, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: '#BDFBA9', padding: 15   }}>
                <SectionList
                   sections={this.state.data}
                   renderSectionHeader={( {section} ) => <Text style={styles.title} >{section.title}</Text> }
                   renderItem={( {item} ) => <Text style={styles.item}>{item}</Text> }
                   keyExtractor={( item, index ) => index }
                   />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 10
    },

    item: {
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 10
    }
});

export default Doubts;
