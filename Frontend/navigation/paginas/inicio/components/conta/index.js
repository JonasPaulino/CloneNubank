import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

export const Conta = (props) => {
    return (
        <View style={styles.baseHeader}>
            <View style={styles.baseHeaderTitle}>
                <Text style={styles.baseHeaderTitleConta}>Conta</Text>
                <Image style={styles.baseHeaderTitleIco} source={require('../../../../../assets/right.png')}/>
            </View>
            <View>
                <Text style={styles.baseHeaderTitleValor}>R$ {props.saldo}</Text>
            </View>

        </View>
    )
}