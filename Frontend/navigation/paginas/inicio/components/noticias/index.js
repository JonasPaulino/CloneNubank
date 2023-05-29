import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import styles from './style';

const noticiasJson = [
  {
    titulo: 'Semana do comsumidor',
    texto: 'com até 50% de chashback. Vem!'
  },
  {
    titulo: 'Conta PJ: Conta Jurídica',
    texto: 'seu negócio na Nubank!'
  }
];

const NoticiaItem = ({ titulo, texto }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.noticia}>{titulo}</Text>
      <Text style={styles.noticia}>{texto}</Text>
    </View>
  );
};

export const Noticias = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {noticiasJson.map((noticia, index) => (
        <NoticiaItem key={index} titulo={noticia.titulo} texto={noticia.texto} />
      ))}
    </ScrollView>
  );
};
