import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking } from 'react-native';

import MenuButton from '../components/MenuButton';

export default class About extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Sobre nós',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/imgs/About.png')}
            style={{ width: 15, height: 15 }}
          />
        ),
      };
  
      
    render() {
      return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1}}>
                <MenuButton navigation={this.props.navigation} />
            </View>
            <View style={{ flex: 9, padding: 10 }}>
              <ScrollView>
              <View style={styles.mainView}>
                <Text style={styles.title}>Qual a motivação para criar o app?</Text>
                <Text>O apilicativo não possui nenhum vínculo direto com a SPTrans ou qualquer empresa
                  credenciada pela SPTrans. O intuito do aplicativo é apenas facilitar ao usuário
                  do bilhete único de São Paulo a encontrar pontos comercias que efetuam recargas ou
                  validações de saldo nas diversas modalidades que a SPTrans permite.
                </Text>
              </View>

              <View style={styles.mainView}>
                <Text style={styles.title}>De onde surgiu a ideia?</Text>
                <Text>A ideia surgiu a partir da reclamação de alguns usuários em foruns da internet ou em redes
                  sociais, pois com o crescente número de pontos de recargas clandestinos na cidade muitos relatavam
                  receio de onde carregar.
                </Text>
              </View>

              <View style={styles.mainView}>
                <Text style={styles.title}>Qual a garantia do app?</Text>
                <Text>
                  O app disponibila em um mapa os pontos comerciais que estão cadastrados perante a SPTrans, porém
                  os responsáveis pelo app se reservam no direito de, a qualquer momento e sem prévio aviso, desativar
                  o serviço ou atualizar a lista de estabelecimentos dentro de prazo próprio. Não garantimos o sucesso da
                  compra de saldo caso, ao chegar no estabelecimento, o mesmo esteja fechado, não possua mais o sistema de recarga
                  ou por qualquer outra razão não consiga concluir a venda do saldo, pois os pontos tem autonomia sob a forma como
                  o serviço é prestado. Ainda, a única garantia da recarga ser autêntica está no comprovante emitido pela máquina,
                  e nesse caso cabe unicamente ao usuário do bilhete único verificar a autenticidade da recarga concluída.
                </Text>
              </View>

              <View style={styles.mainView}>
                <Text style={styles.title}>De onde provém a fonte das informações?</Text>
                <Text>
                  As informações usadas no aplicativo provém da lista de estabelecimentos que a SPTrans fornece e que pode
                  ser acessada no link <Text style={{ fontWeight: 'bold' }} onPress={() => Linking.openURL('http://www.sptrans.com.br/media/1359/rede_de_recarga.pdf')}>http://www.sptrans.com.br/media/1359/rede_de_recarga.pdf</Text>
                </Text>
              </View>

              <View style={styles.mainView}>
                <Text style={styles.title}>Como entrar em contato com o desenvolvedor do app?</Text>
                <Text>
                 Favor entrar em contato através do e-mail <Text style={{ fontWeight: 'bold' }} onPress={() => Linking.openURL('mailto:pontosrecargabu@protonmail.com')}>pontosrecargabu@protonmail.com</Text>
                </Text>
              </View>
              </ScrollView>
            </View>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    mainView: {
      backgroundColor: 'lightgrey',
      elevation: 3,
      borderRadius: 5,
      padding: 5,
      margin: 5
    },

    title: {
      fontSize: 20,
      fontWeight: 'bold'
    }

  })