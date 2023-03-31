import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import styles from './style';

const icons = [
    {
        imagemIcon: require('../../../../../assets/pix_black.png'),
        nome: 'Área Pix',
    },
    {
        imagemIcon: require('../../../../../assets/barcode.png'),
        nome: 'Pagar',
    },
    {
        imagemIcon: require('../../../../../assets/cash-fast.png'),
        nome: 'Transferir',
    },
    {
        imagemIcon: require('../../../../../assets/cellphone.png'),
        nome: 'Recarga de celular',
    },
    {
        imagemIcon: require('../../../../../assets/cash-plus.png'),
        nome: 'Deposito',
    },
  ];

  const IconItem = ({ icons }) => {
    return (
      <View style={styles.baseBotao}>
        <View style={styles.baseIcon}>
            <Image source={icons.imagemIcon} style={{ width: 32, height: 32 }} />
        </View>
        <Text style={{ marginTop: 8 }}>{icons.nome}</Text>
      </View>
    );
  };

  export const IconBar = () => {
    return (
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsHorizontalScrollIndicator={false}
        style={styles.carrossel}
      >
        {icons.map((icon, index) => (
          <IconItem key={index} icons={icon} />
        ))}
      </ScrollView>
    );
  }