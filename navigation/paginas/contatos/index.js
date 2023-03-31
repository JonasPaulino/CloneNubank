import * as React from 'react';
import { View, Text } from 'react-native-web';
import { Lista } from '../../../components/Lista';
import styles from './style';

export default function Fatura({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Lista de contatos</Text>
        </View>        
        <Lista />
      </View>

    );
}