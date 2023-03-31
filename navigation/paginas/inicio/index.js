import * as React from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/header';
import { Conta } from './components/conta';
import { IconBar } from './components/butoes';
import { Cartoes } from './components/cartoes';
import styles from './style';



export default function Inicio() {
    return (
        <View style={styles.container}>
            <Header />
            <Conta />
            <IconBar />
            <Cartoes />
        </View>
    );
}
