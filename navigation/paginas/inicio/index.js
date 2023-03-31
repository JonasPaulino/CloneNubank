import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header } from './components/header';
import { Conta } from './components/conta';
import { IconBar } from './components/butoes';
import { Cartoes } from './components/cartoes';
import { Noticias } from './components/noticias';
import { Fatura } from './components/fatura';
import styles from './style';

export default function Inicio() {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Header />
                <Conta />
                <IconBar />
                <Cartoes />
                <Noticias />
                <Fatura />
            </View>
        </ScrollView>
    );
}
