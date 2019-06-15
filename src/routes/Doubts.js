import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

import MenuButton from '../components/MenuButton';

class Doubts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                { title: 'Title1', data: ['item1', 'item2'] },
                { title: 'Title2', data: ['item3', 'item4'] },
                { title: 'Title3', data: ['item5', 'item6'] },
            ]
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <MenuButton navigation={this.props.navigation} />
                </View>

                <View style={{ flex: 9, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: '#483d8b', paddingTop: 15 }}>
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
        fontSize: 26,
        fontWeight: 'bold',
        marginLeft: 5
    },

    item: {
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 10
    }
});

export default Doubts;
