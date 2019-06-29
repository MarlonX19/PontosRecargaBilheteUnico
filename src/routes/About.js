import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking } from 'react-native';
import { Container, Header, Content, Accordion } from 'native-base';

import MenuButton from '../components/MenuButton';

const dataArray = [
  { title: "Qual a motivação para criar o app?", content: "O aplicativo não possui nenhum vínculo direto com a SPTrans ou qualquer empresa credenciada pela SPTrans. O intuito do aplicativo é apenas facilitar ao usuário do bilhete único de São Paulo a encontrar pontos comercias que efetuam recargas ou validações de saldo nas diversas modalidades que a SPTrans permite." },
  { title: "De onde surgiu a ideia?", content: "A ideia surgiu a partir da reclamação de alguns usuários em foruns da internet ou em redes sociais, pois com o crescente número de pontos de recargas clandestinos na cidade muitos relatavam receio de onde carregar." },
  { title: "Qual a garantia do app?", content: "O app disponibila em um mapa os pontos comerciais que estão cadastrados perante a SPTrans, porémos responsáveis pelo app se reservam no direito de, a qualquer momento e sem prévio aviso, desativaro serviço ou atualizar a lista de estabelecimentos dentro de prazo próprio. Não garantimos o sucesso dacompra de saldo caso, ao chegar no estabelecimento, o mesmo esteja fechado, não possua mais o sistema de recargaou por qualquer outra razão não consiga concluir a venda do saldo, pois os pontos tem autonomia sob a forma comoo serviço é prestado. Ainda, a única garantia da recarga ser autêntica está no comprovante emitido pela máquina,e nesse caso cabe unicamente ao usuário do bilhete único verificar a autenticidade da recarga concluída." },
  { title: "De onde provém a fonte das informações?", content: "As informações usadas no aplicativo provém da lista de estabelecimentos que a SPTrans fornece e que pode ser acessada no link http://www.sptrans.com.br/media/1359/rede_de_recarga.pdf" },
  { title: "Como contatar o desenvolvedor do app?", content: "Favor entrar em contato através do e-mail pontosrecargabu@protonmail.com" },
  
];

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
 
          <Accordion dataArray={dataArray} icon='arrow-down' expandedIcon='arrow-up' iconStyle={{ color: "green" }} expandedIconStyle={{ color: "red" }} />
  
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