import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Main from './routes/Main';

class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
               <Main />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default Index;
