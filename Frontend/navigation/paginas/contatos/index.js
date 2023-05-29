import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Lista } from '../../../components/Lista';
import styles from './style';

export default function Contato({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Lista de contatos</Text>
      </View>        
      <View style={styles.listContainer}>
        <ScrollView>
          <Lista searchValue={''} />
        </ScrollView>
      </View>
    </View>
  );
}
