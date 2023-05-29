import React, { useContext, useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';
import { AppContext } from '../../../../context';
import { Lista } from '../../../../components/Lista';

import styles from './style';

export default function PESSOA() {
  const navigation = useNavigation();
  const { saldoConta, setSaldoConta } = useContext(AppContext);
  const { valorDigitado, setValorDigitado } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handlePress = () => {
    // Ação a ser executada quando o botão for pressionado
    console.log('Botão pressionado!');
  };

  const handleSearchChange = (text) => {
    setSearchValue(text);
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
        <Text style={styles.titulo}>Para quem você quer transferir?</Text>
        <Text style={styles.subTitulo} >Transferindo  
          <Text style={styles.subTituloValor}> R$ {valorDigitado}</Text>
        </Text>
        <TextInput 
            style={styles.input}
            placeholder='Nome ou CPF/CNPJ'
            value={searchValue}
            onChangeText={handleSearchChange}
          />
      </View>
      <ScrollView style={styles.ListaContatos}>
        <Text style={styles.subTituloLista} >Todos os contatos</Text>  
        <Lista searchValue={searchValue} />
      </ScrollView>
    </View>
  );
}