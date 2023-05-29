import React, { useContext } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';
import { AppContext } from '../../../../context';

import styles from './style';

export default function RESUMO() {
  const navigation = useNavigation();
  const { saldoConta, setSaldoConta } = useContext(AppContext);

  const handlePress = () => {
    // Ação a ser executada quando o botão for pressionado
    console.log('Botão pressionado!');
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton onPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Qual é o valor da transferência?</Text>
        <Text style={styles.subTitulo} >Saldo disponível em conta 
          <Text style={styles.subTituloValor}> R$ {saldoConta}</Text>
        </Text>
        <TextInput 
            style={styles.input}
            placeholder='R$ 100,00'
          
          />
      </View>
    </View>
  );
}
