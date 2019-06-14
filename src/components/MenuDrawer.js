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
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "R MARIA AMALIA LOPES DE AZEVED,976",
                      "Field3": "TREMEMBE",
                      "Field4": "ZONA NORTE",
                      "Field5": "02350‐001",
                      "Field6": "RECARGA APENAS EM CARTÕES ANTIGOS NÃO PERSONALIZADOS",
                      "Field7": "CASAS LOTERICAS",
                      "Field8": "VALE DO OURO",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA Sao Cirilo de Alexandria, 60  0",
                      "Field3": "Jardim Fontalis",
                      "Field4": "ZONA NORTE",
                      "Field5": "02360‐170",
                      "Field6": "COMUM",
                      "Field7": "ELITTLANHOUSE",
                      "Field8": "ELITTLANHOUSE",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA SAO CIRILO DE ALEXANDRIA 1039",
                      "Field3": "JARDIM FONTALIS",
                      "Field4": "ZONA NORTE",
                      "Field5": "02360‐170",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIARIO‐LIVRE",
                      "Field7": "LOJA ‐ AUTOPEÇAS",
                      "Field8": "SAGITARIO MOTO PEÇAS",
                      "Field9": "Recarga Assistida"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA SAO BASILIO MAGNO 03",
                      "Field3": "JARDIM CAMPO LIMPO (ZONA NORTE)",
                      "Field4": "ZONA NORTE",
                      "Field5": "02362‐010",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIARIO‐LIVRE",
                      "Field7": "PAPELARIA/COPIADORA",
                      "Field8": "GORDELICIAS",
                      "Field9": "Recarga Assistida"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA SAO ROMAO DE FRANCA 07",
                      "Field3": "JARDIM CAMPO LIMPO (ZONA NORTE)",
                      "Field4": "ZONA NORTE",
                      "Field5": "02362‐070",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIARIO‐LIVRE",
                      "Field7": "MERCEARIA/MERCADO",
                      "Field8": "MERCADINHO SAO FRANCISCO",
                      "Field9": "Recarga Assistida"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "ESTRADA da Cachoeira, 768 LOJA 03 0",
                      "Field3": "Jardim Sao Joao (Zona Norte)",
                      "Field4": "ZONA NORTE",
                      "Field5": "02365‐000",
                      "Field6": "COMUM",
                      "Field7": "HOBBY MANIAC'S",
                      "Field8": "HOBBY MANIAC'S",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA FLORESCENTE 07A",
                      "Field3": "JD CORISCO",
                      "Field4": "ZONA NORTE",
                      "Field5": "02365‐145",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIARIO‐LIVRE",
                      "Field7": "BAR",
                      "Field8": "BAR DO PEDRINHO",
                      "Field9": "Recarga Assistida"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "Rua dos Jequitibas, 80",
                      "Field3": "Jd Oriental",
                      "Field4": "ZONA OESTE",
                      "Field5": "05263‐030",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "METRÔ JABAQUARA",
                      "Field8": "Estação Metrô",
                      "Field9": "Auto Atendimento (Máquinas)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA NARCISE CARBONEL 740",
                      "Field3": "PQ ESPERANCA",
                      "Field4": "ZONA OESTE",
                      "Field5": "05266‐020",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "ALESSANDRO NASCIMENTO OLIVEIRA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "Rua Vitório Trento 318",
                      "Field3": "PQ ESPERANÇA",
                      "Field4": "ZONA OESTE",
                      "Field5": "05266‐090",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA E SERVIÇOS",
                      "Field8": "LEANDRO GONZAGA MOREIRA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "ESTRADA CORONEL JOSE GLADIADOR,202",
                      "Field3": "JARDIM ANHANGUERA",
                      "Field4": "ZONA OESTE",
                      "Field5": "05267‐000",
                      "Field6": "RECARGA APENAS EM CARTÕES ANTIGOS NÃO PERSONALIZADOS",
                      "Field7": "CASAS LOTERICAS",
                      "Field8": "LOTERICA CANAA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA VINHEDO 1",
                      "Field3": "SITIO ITABERABA I",
                      "Field4": "ZONA OESTE",
                      "Field5": "05270‐100",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIARIO‐LIVRE",
                      "Field7": "LOJA ‐ ROUPA/CALÇADOS",
                      "Field8": "SHARLOM BAZAR",
                      "Field9": "Recarga Assistida"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "R LEOPOLDO DE PASSOS LIMA,400B",
                      "Field3": "JD SANTA FE",
                      "Field4": "ZONA OESTE",
                      "Field5": "05271‐000",
                      "Field6": "RECARGA APENAS EM CARTÕES ANTIGOS NÃO PERSONALIZADOS",
                      "Field7": "CASAS LOTERICAS",
                      "Field8": "LOTCA SANTA FE",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA DIONISIO BELLANTE 292",
                      "Field3": "JARDIM SANTA FE (ZONA OESTE)",
                      "Field4": "ZONA OESTE",
                      "Field5": "05271‐150",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIARIO‐LIVRE",
                      "Field7": "MERCEARIA/MERCADO",
                      "Field8": "JC MERCADINHO",
                      "Field9": "Recarga Assistida"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA PALMEIROPOLIS 167",
                      "Field3": "JARDIM MONTE BELO",
                      "Field4": "ZONA OESTE",
                      "Field5": "05272‐005",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIARIO‐LIVRE",
                      "Field7": "MERCEARIA/MERCADO",
                      "Field8": "MERCEARIA DO SANTANA",
                      "Field9": "Recarga Assistida"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA PEDRA DE BENDENGO 01",
                      "Field3": "JARDIM MONTE BELO",
                      "Field4": "ZONA OESTE",
                      "Field5": "05272‐030",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIARIO‐LIVRE",
                      "Field7": "MERCEARIA/MERCADO",
                      "Field8": "MERCADINHO COSTA",
                      "Field9": "Recarga Assistida"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA PENCEU ABRAO 10",
                      "Field3": "VILA DOS PALMARES",
                      "Field4": "ZONA OESTE",
                      "Field5": "05273‐190",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIARIO‐LIVRE",
                      "Field7": "MERCEARIA/MERCADO",
                      "Field8": "MSSE CARVALHO LTDA",
                      "Field9": "Recarga Assistida"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "AVENIDA Dalva de Oliveira, 75  0",
                      "Field3": "Jardim Rosinha",
                      "Field4": "ZONA OESTE",
                      "Field5": "05274‐001",
                      "Field6": "COMUM",
                      "Field7": "CAFEZINHO E LANCHONETE QUEBRA GALHO",
                      "Field8": "CAFEZINHO E LANCHONETE QUEBRA GALHO",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA DA COMUNIDADE, 21",
                      "Field3": "ANHANGUERA",
                      "Field4": "ZONA OESTE",
                      "Field5": "05274‐140",
                      "Field6": "COMUM",
                      "Field7": "LOCADORA EXPLOSAO",
                      "Field8": "LOCADORA EXPLOSAO",
                      "Field9": "Auto Atendimento (Máquinas)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA DA COMUNIDADE 21",
                      "Field3": "JARDIM ROSINHA",
                      "Field4": "ZONA OESTE",
                      "Field5": "05274‐140",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIARIO‐LIVRE",
                      "Field7": "VIDEO LOCADORA",
                      "Field8": "EXPLOSAO VIDEO",
                      "Field9": "Recarga Assistida"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA SAO PAULO 4",
                      "Field3": "RESIDENCIAL SOL NASCENTE",
                      "Field4": "ZONA OESTE",
                      "Field5": "05280‐110",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIARIO‐LIVRE",
                      "Field7": "SUPERMERCADO",
                      "Field8": "SUPERMERCADO TIO ORIM",
                      "Field9": "Recarga Assistida"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA Adoniran Barbosa, 20  0",
                      "Field3": "Residencial Sol Nascente",
                      "Field4": "ZONA OESTE",
                      "Field5": "05282‐020",
                      "Field6": "COMUM",
                      "Field7": "LORD PAO DE MEL",
                      "Field8": "LORD PAO DE MEL",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SAO PAULO",
                      "Field2": "RUA NANUQUE,12",
                      "Field3": "VILA LEOPOLDINA",
                      "Field4": "ZONA OESTE",
                      "Field5": "05302‐030",
                      "Field6": "RECARGA APENAS EM CARTÕES ANTIGOS NÃO PERSONALIZADOS",
                      "Field7": "CASAS LOTERICAS",
                      "Field8": "BELLA SORTE LOTERIAS",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA IBITIRAMA , 1946",
                      "Field3": "VILA PRUDENTE",
                      "Field4": "ZONA LESTE",
                      "Field5": "03133‐000",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "W.DE AQUINO",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA IBITIRAMA 1530",
                      "Field3": "VILA PRUDENTE",
                      "Field4": "ZONA LESTE",
                      "Field5": "03133‐200",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "BANCA DE JORNAL",
                      "Field8": "BANCA IBITIRAMA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "Rua Ibitirama, 1200",
                      "Field3": "Vila Prudente",
                      "Field4": "ZONA LESTE",
                      "Field5": "03134‐001",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "ANGELO GARCIA SORRILHA RODRIGUES",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA RIO DO PEIXE 499",
                      "Field3": "VILA ZELINA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03145‐050",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "JURANDIR DE PAULA BAR E MERCEARIA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "Avenida Presidente Wilson, 4801",
                      "Field3": "Vila Independência",
                      "Field4": "ZONA LESTE",
                      "Field5": "03153‐001",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "Estação Metrô",
                      "Field8": "Estação Tamanduateí ‐ Metrô",
                      "Field9": "Venda e Recarga/Auto Atendimento (Máquinas)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "Av. Presidente Wilson, 4801",
                      "Field3": "Vila Independencia",
                      "Field4": "ZONA LESTE",
                      "Field5": "03153‐001",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "Estação CPTM",
                      "Field8": "Estação Tamanduateí ‐ CPTM",
                      "Field9": "Venda e Recarga/Auto Atendimento (Máquinas)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "Av. Presidente Wilson, 4801",
                      "Field3": "Vila Independencia,",
                      "Field4": "ZONA LESTE",
                      "Field5": "03153‐001",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "Estação Tamanduateí",
                      "Field8": "Estação Metrô",
                      "Field9": "Recarga Assistida"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "PRAÇA ADOLFO CAVALCANTE, 96",
                      "Field3": "VILA CELESTE",
                      "Field4": "ZONA LESTE",
                      "Field5": "03158‐030",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "ADEGA",
                      "Field8": "FRAN ADEGA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA ITIUBA 510 CS 01",
                      "Field3": "VILA CELESTE",
                      "Field4": "ZONA LESTE",
                      "Field5": "03158‐610",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "SERGIO CHAVEIRO",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "Rua Hipódromo, 675",
                      "Field3": "Brás",
                      "Field4": "ZONA LESTE",
                      "Field5": "03162‐025",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "Estação Bresser",
                      "Field8": "Metrô",
                      "Field9": "Recarga Automática (WEB)/Auto Atendimento (Máquinas)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "Rua Hipódromo, 675",
                      "Field3": "Brás",
                      "Field4": "ZONA LESTE",
                      "Field5": "03162‐025",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "Estação Metrô",
                      "Field8": "Estação Bresser‐Mooca",
                      "Field9": "Venda e Recarga/Auto Atendimento (Máquinas)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA BRESSER, 2849",
                      "Field3": "MOOCA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03162‐030",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "LAN HOUSE",
                      "Field8": "LAN HOUSE OFFICE HOUSE",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA DO HIPODROMO, 1123",
                      "Field3": "MOOCA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03164‐140",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "ARMARINHOS",
                      "Field8": "ARMARINHOS TAKAYAMA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA IPANEMA, 548",
                      "Field3": "MOOCA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03164‐200",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "BIJUTERIA",
                      "Field8": "BELLA DONZELA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA DA MÓOCA, 2616",
                      "Field3": "MOOCA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03165‐000",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "LOJA DE ELETRÔNICOS",
                      "Field8": "SELFIE ASSISTENCIA TECNICA 2",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA DA MOOCA 4487",
                      "Field3": "MOOCA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03165‐003",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "OLESIA MARIA MENDONÇA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA DA MOOCA, 4139",
                      "Field3": "MOOCA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03165‐003",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "MERCADO E MERCEARIA",
                      "Field8": "INACIO MERCEARIA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA TAQUARI, 546",
                      "Field3": "MOOCA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03166‐000",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "DROGARIA",
                      "Field8": "DROGARIA FARMILTON",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA TOBIAS BARRETO, 736",
                      "Field3": "MOOCA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03176‐000",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "LOJA DE ELETRÔNICOS",
                      "Field8": "WORLD CELL",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA TOBIAS BARRETO, 1257",
                      "Field3": "BELEM",
                      "Field4": "ZONA LESTE",
                      "Field5": "03176‐001",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "ARMARINHOS",
                      "Field8": "ESPANHOL ARMARINHOS",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "Rua Melo Freire, s/n",
                      "Field3": "Bras",
                      "Field4": "ZONA LESTE",
                      "Field5": "03178‐200",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "Estação Tatuapé",
                      "Field8": "Metrô",
                      "Field9": "Recarga Automática (WEB)/Auto Atendimento (Máquinas)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "Av. Dr.Vital Brasil, s/n",
                      "Field3": "Butantã",
                      "Field4": "ZONA LESTE",
                      "Field5": "03178‐200",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "Estação Butantã",
                      "Field8": "Metrô",
                      "Field9": "Recarga Automática (WEB)/Auto Atendimento (Máquinas)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "R. dos Pinheiros, 623",
                      "Field3": "Pinheiros",
                      "Field4": "ZONA LESTE",
                      "Field5": "03178‐200",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "Estação Fradique Coutinho",
                      "Field8": "Metrô",
                      "Field9": "Recarga Automática (WEB)/Auto Atendimento (Máquinas)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "Avenida Alcântara Machado, S/N",
                      "Field3": "Belém",
                      "Field4": "ZONA LESTE",
                      "Field5": "03178‐200",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "Estação Metrô",
                      "Field8": "Estação Belém ‐ Metrô",
                      "Field9": "Venda e Recarga/Auto Atendimento (Máquinas)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "Rua Melo Freire, S/N",
                      "Field3": "Tatuapé",
                      "Field4": "ZONA LESTE",
                      "Field5": "03178‐200",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "Estação Metrô",
                      "Field8": "Estação Tatuapé ‐ Metrô",
                      "Field9": "Venda e Recarga/Auto Atendimento (Máquinas)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AV MARIA CURSI ,1001 SALA 3",
                      "Field3": "SAO MATEUS",
                      "Field4": "ZONA LESTE",
                      "Field5": "03962‐000",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "OSVAN MENDES DE SOUZA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AVENIDA FURTADO MENDONÇA, 437",
                      "Field3": "PARQUE COLONIAL",
                      "Field4": "ZONA LESTE",
                      "Field5": "03968‐030",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "SALÃO DE BELEZA",
                      "Field8": "MOURA CABELEIREIRO",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA ALBERTO DE MACEDO, 146",
                      "Field3": "JARDIM SANTA ADELIA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03973‐000",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "ARMARINHOS",
                      "Field8": "QUASE TUDO ARMARINHOS",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA ACRISIO SANTANA",
                      "Field3": "JARDIM SANTA ADELIA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03974‐180",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "EMPORIO MARANATA 1",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA JIM BACKUS ,3",
                      "Field3": "FAZENDA DA JUNTA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03977‐005",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "MARIA DO CARMO DA SILVA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "R. SOLDADO CANDIDO DA LUZ PAIVA, 131",
                      "Field3": "COHAB M",
                      "Field4": "ZONA LESTE",
                      "Field5": "03977‐080",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "DROGARIA",
                      "Field8": "DROGARIA JMF FORMULAS",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA SOLDADO CANDIDO DA LUZ PAIVA, 235",
                      "Field3": "SAPOPEMBA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03977‐080",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "BAR E LANCHONETE",
                      "Field8": "LANCHES FLOREN",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA DOMENICO DEL  PANE, 31",
                      "Field3": "FAZENDA DA JUTA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03977‐398",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "LOJA DE ELETRÔNICOS",
                      "Field8": "MASCOTE ELETRICOS 2",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "Rua Antônio Benelli, 21 ‐ Fazenda da Juta",
                      "Field3": "FAZENDA DA JUTA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03977‐475",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "DROGARIA",
                      "Field8": "DROGARIA SÃO JORGE",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "TRAVESSA ISAQUE TOMAS ,104",
                      "Field3": "FAZENDA DA JUTA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03977‐522",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "MERCADINHO DOIS IRMAOS",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA JACQUES BREL, 17",
                      "Field3": "FAZENDA DA JUTA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03977‐710",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA E SERVIÇOS",
                      "Field8": "NC BOMBONIERI",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "TRAVESSA LUIZA BACARA, 28",
                      "Field3": "FAZENDA DA JUTA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03977‐710",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "MERCADO E MERCEARIA",
                      "Field8": "LOJA DO CASSIANO",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AVENIDA PRIMAVERA DE CAIENA 363",
                      "Field3": "PARQUE SANTA MADALEN",
                      "Field4": "ZONA LESTE",
                      "Field5": "03981‐010",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "UP OFFICE",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AVENIDA PRIMAVERA DE CAIENA, 333",
                      "Field3": "PARQUE SANTA MADALENA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03981‐010",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "BAZAR",
                      "Field8": "Bazar Façarte",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AV. DR. PAULO COLOMBO PEREIRA DE QUEIROZ, 523",
                      "Field3": "SAPOPEMBA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03982‐130",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "MERCADO E MERCEARIA",
                      "Field8": "EMPORIO GRAVATA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AV MANUEL PIMENTEL, em frente ao número 300",
                      "Field3": "JARDIM PLANALTO",
                      "Field4": "ZONA LESTE",
                      "Field5": "03983‐020",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "BANCA DE JORNAL",
                      "Field8": "BANCA KEILA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AV MANUEL PIMENTEL, 300",
                      "Field3": "JD PLANALTO",
                      "Field4": "ZONA LESTE",
                      "Field5": "03983‐020",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "BANCA DE JORNAL",
                      "Field8": "BANCA KEILA II",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AVENIDA MANOEL PIMENTEL, 300",
                      "Field3": "PARQUE SANTA MADALENA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03983‐020",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "BANCA DE JORNAL",
                      "Field8": "BANCA GEOVANA E JULIA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA PROFESSO FONSECA 335",
                      "Field3": "PQ SANTA MADALENA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03983‐210",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "OSMAR PEREIRA PIMENTA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA MARCONDES MACHADO, 12 A",
                      "Field3": "VILA ALZIRA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03986‐200",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "LOJA DE VARIEDADES",
                      "Field8": "BAZAR GIREI",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA GLAUBER ROCHA, 24",
                      "Field3": "JARDIM ALZIRA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03986‐270",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "BANCA DE JORNAL",
                      "Field8": "BANCA IGUASSU",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "Av. Professor Luís Inácio de Anhaia Mello, 9048",
                      "Field3": "Jardim Planalto",
                      "Field4": "ZONA LESTE",
                      "Field5": "03987‐200",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "Estação Vila União",
                      "Field8": "Estação Metrô",
                      "Field9": "Recarga Assistida"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AVENIDA SAPOPEMBA, 11456",
                      "Field3": "JAD. SAPOPEMBA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03988‐000",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "FARMÁCIA",
                      "Field8": "FARMACIA VI ‐ FARMA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AV. SAPOPEMBA, 8090 ‐ BOX 32",
                      "Field3": "SAPOPEMBA",
                      "Field4": "ZONA LESTE",
                      "Field5": "03988‐000",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "LOJA DE ELETRÔNICOS",
                      "Field8": "SEFIE ASSISTENCIA TECNICA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA ALMIRANTE NUNES, Nº 185 BL. H‐3 LOJA 02",
                      "Field3": "CIDADE NOVA HELIOPOLIS",
                      "Field4": "ZONA LESTE",
                      "Field5": "04231‐000",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "LOJA DE VARIEDADES",
                      "Field8": "BAZAR LEO E GABI",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA FRUTUOSO BARBOSA, 135",
                      "Field3": "JARDIM PRIMAVERA",
                      "Field4": "ZONA LESTE",
                      "Field5": "04812‐030",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "MERCADO E MERCEARIA",
                      "Field8": "MERCADINHO SILVA SOUZA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA CONSELHEIRO BELISÁRIO, 303",
                      "Field3": "BRÁS",
                      "Field4": "ZONA LESTE",
                      "Field5": "05109‐170",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "BANCA DE JORNAL",
                      "Field8": "BANCA WILSON 2",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AVENIDA CLAUDIO FRANCHI, 200",
                      "Field3": "JARDIM MONTE KEMEL",
                      "Field4": "ZONA LESTE",
                      "Field5": "05633‐000",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "LOJA DE VARIEDADES",
                      "Field8": "LOJA DE VARIEDADES  MAGIA DO TEMPO",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA GLAUCO ANTONIO GALLI, 454 ‐ JARDIM PALMIRA",
                      "Field3": "GUARULHOS",
                      "Field4": "ZONA LESTE",
                      "Field5": "07076‐010",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "CABINE DE RECARGAS",
                      "Field8": "CABINE SUPERMERCADO PEROLA ‐ RB",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA JAMIL JOÃO ZARIF, 767  B ‐  LOJA B",
                      "Field3": "JARDIM SANTA VICENCIA",
                      "Field4": "ZONA LESTE",
                      "Field5": "07143‐000",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "LOJA DE ELETRÔNICOS",
                      "Field8": "SQUIDTEC TECNOLOGIA DA INFORMAÇÃO",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AVENIDA MARIANA UBALDINA DO ESPIRITO SANTO, 756 ‐ MACEDO",
                      "Field3": "GUARULHOS",
                      "Field4": "ZONA LESTE",
                      "Field5": "07197‐000",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "LOJA DE ELETRÔNICOS",
                      "Field8": "LA CELL ASSISTENCIA TECNICA 2",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AV PIRES DO RIO 1778",
                      "Field3": "V AMERICANA",
                      "Field4": "ZONA LESTE",
                      "Field5": "08002‐000",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "ADEGA LIMA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA PEDRO ESCOBAR, Nº 501 SALA 61",
                      "Field3": "JD. ELIANA",
                      "Field4": "ZONA LESTE",
                      "Field5": "08010‐000",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "BANCA DE JORNAL",
                      "Field8": "BANCA SERRA DOURADA 5",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA BERALDO MARCONDES 170",
                      "Field3": "SAO MIGUEL PAULISTA",
                      "Field4": "ZONA LESTE",
                      "Field5": "08010‐070",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "MANGATA ARTIGOS EM E.V.A",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "Rua Beraldo Marcondes , 136",
                      "Field3": "São Miguel Paulista",
                      "Field4": "ZONA LESTE",
                      "Field5": "08010‐070",
                      "Field6": "ESCOLAR‐COMUM‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL",
                      "Field7": "Estação CPTM",
                      "Field8": "Estação São Miguel ‐ CPTM",
                      "Field9": "Venda e Recarga/Auto Atendimento (Máquinas)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AV MARECHAL TITO , 1109",
                      "Field3": "SÃO MIGUEL PAULISTA",
                      "Field4": "ZONA LESTE",
                      "Field5": "08010‐090",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "HELP LIMGERIE",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA DANIEL BERNARDO , 180",
                      "Field3": "SÃO MIGUEL PAULISTA",
                      "Field4": "ZONA LESTE",
                      "Field5": "08010‐100",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "WALKIRIA PAPELARIA E SERVIÇOS",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "RUA CUMARU, 441",
                      "Field3": "CIDADE NITRO OPERARI",
                      "Field4": "ZONA LESTE",
                      "Field5": "08010‐380",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "MARIA ANTONIETA SILVA FERREIRA RIBEIRO",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AVENIDA NORDESTINA 116",
                      "Field3": "SAO MIGUEL",
                      "Field4": "ZONA LESTE",
                      "Field5": "08011‐000",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "NEIDE CORREIA DA SILVA",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AVENIDA NORDESTINA, 116",
                      "Field3": "SÃO MIGUEL",
                      "Field4": "ZONA LESTE",
                      "Field5": "08011‐000",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "KATE MARTINS RODRIGUES",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "PRAÇA PADRE ALEIXO MONTEIRO MAFRA 139",
                      "Field3": "SAO MIGUEL",
                      "Field4": "ZONA LESTE",
                      "Field5": "08011‐010",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "VENDA E MANUTENÇÃO DE CELULAR",
                      "Field8": "MARCELO RAMOS FERNANDES",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AV PIRES DO RIO, 710",
                      "Field3": "VILA AMERICANA",
                      "Field4": "ZONA LESTE",
                      "Field5": "08020‐000",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "COMERCIO ALIMENTOS",
                      "Field8": "DIK CLEI BOMBONIER",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                  {
                    "type": null,
                    "properties": {
                      "Field1": "SÃO PAULO",
                      "Field2": "AV PIRES DO RIO, 605 LJ 01",
                      "Field3": "V AMERICANA‐ITAQUERA",
                      "Field4": "ZONA LESTE",
                      "Field5": "08020‐000",
                      "Field6": "COMUM‐ESCOLAR‐VALE TRANSPORTE‐FIDELIDADE‐LAZER‐MENSAL‐DIÁRIO‐‐PASSE LIVRE ESTUDANTE",
                      "Field7": "LOJA/SERVIÇOS",
                      "Field8": "MILANN CONVENIENCIAS",
                      "Field9": "Venda e Recarga (Assistida)"
                    }
                  },
                ],

            teste: []
        }
    }

    componentDidMount() {
        // to do only once
        Geocoder.init('AIzaSyBhAwIwcJLk10RVN1eQIWGiESlcZZnFjcE'); // use a valid API key

        var temp = []
        this.state.pontos.forEach(element => {
            console.log(element.properties.Field2)

            Geocoder.from(element.properties.Field2)
            .then(json => {
                var location = json.results[0].geometry.location;
                console.log(location);
                temp.push(location)
                console.log(temp)
            })
            .catch(error => console.warn(error));
        });

        this.setState({ teste: temp })

    }


    navLinks(nav, text) {
        return (
            <TouchableOpacity
                style={{ height: 50 }}
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
