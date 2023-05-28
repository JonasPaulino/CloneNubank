import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

const IconItem = ({ icon }) => {
  const navigation = useNavigation();

  const handleIconPress = () => {
    console.log(icon.pagina);
    navigation.navigate(icon.pagina);
  };

  return (
    <TouchableOpacity onPress={handleIconPress}>
      <View style={styles.baseBotao}>
        <View style={styles.baseIcon}>
          <Image source={{ uri: icon.imagemIcon }} style={{ width: 32, height: 32 }} />
        </View>
        <Text style={{ marginTop: 8 }}>{icon.nome}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const IconBar = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    fetchIcons();
  }, []);

  const fetchIcons = async () => {
    try {
      const response = await fetch('http://localhost:3000/paginas');
      const data = await response.json();
      setIcons(data);
    } catch (error) {
      console.error('Erro ao buscar os ícones:', error);
    }
  };

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      showsHorizontalScrollIndicator={false}
      style={styles.carrossel}
    >
      {icons.map((icon, index) => (
        <IconItem key={index} icon={icon} />
      ))}
    </ScrollView>
  );
};
