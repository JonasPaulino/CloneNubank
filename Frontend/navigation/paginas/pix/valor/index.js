import React, { useContext, useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';
import { parseFloat } from 'react-native';


import { AppContext } from '../../../../context';
import styles from './style';

export default function VALOR() {
  const navigation = useNavigation();
  const { saldoConta, setSaldoConta } = useContext(AppContext);
  const { valorDigitado, setValorDigitado } = useContext(AppContext);

  const handlePress = () => {
    const valor = Number(valorDigitado.replace(/\./g, '').replace(',', '.')) || 0;
    const saldo = Number(saldoConta.replace(/\./g, '').replace(',', '.')) || 0;
    
    if (valor === 0 || valorDigitado == 0) {
      alert('O valor não pode ser zero.')
      return false;
    }
    if(valor > saldo){
      alert('O valor digitado é maior do que o saldo em conta.');
      return false;
    }

    navigation.navigate('PESSOA');
  };
   

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton onPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  const ValorDoInput = (valor) =>{
    setValorDigitado(valor);
  }

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
            onChangeText={ValorDoInput}
            value={valorDigitado}
          />
      </View>
      <View style={styles.botaoContainer}>
        <TouchableOpacity style={styles.botao} onPress={handlePress}>
          <ImageBackground
            source={require('../../../../assets/arrow-right-thin-custom.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};