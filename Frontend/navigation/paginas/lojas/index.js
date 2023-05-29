import * as React from 'react';
import { View, Text } from 'react-native';
import { Empresas } from './components/marcas/';
import styles from './style';


export default function Lojas({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Lojas parceiras</Text>
            </View>
            < Empresas />
        </View>
    );
}