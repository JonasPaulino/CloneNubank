import React from 'react';
import { View, Text, FlatList,TouchableOpacity,Linking ,Image } from 'react-native';
import styles from './styles';

const empresas = [
  { id: 1, logo: require('../../../../../assets/img/aliexpress.png'), cashback: 10, link: 'https://www.aliexpress.com/' },
  { id: 2, logo: require('../../../../../assets/img/amazon.png'), cashback: 15, link: 'https://www.amazon.com/' },
  { id: 3, logo: require('../../../../../assets/img/americanas.png'), cashback: 20, link: 'https://www.americanas.com.br/' },
  { id: 4, logo: require('../../../../../assets/img/casas-bahia.png'), cashback: 25, link: 'https://www.casasbahia.com.br/' },
  { id: 5, logo: require('../../../../../assets/img/magazine.png'), cashback: 30, link: 'https://www.magazineluiza.com.br/' },
  { id: 6, logo: require('../../../../../assets/img/mcDonalts.png'), cashback: 35, link: 'https://www.mcdonalds.com/' },
  { id: 7, logo: require('../../../../../assets/img/netshoes.png'), cashback: 40, link: 'https://www.netshoes.com.br/' },
  { id: 8, logo: require('../../../../../assets/img/walmart.png'), cashback: 45, link: 'https://www.walmart.com/' },
  { id: 9, logo: require('../../../../../assets/img/uber.png'), cashback: 45, link: 'https://www.uber.com/' },
  { id: 10, logo: require('../../../../../assets/img/coca-cola.png'), cashback: 45, link: 'https://www.cocacola.com/' },
  { id: 11, logo: require('../../../../../assets/img/vw.png'), cashback: 45, link: 'https://www.vw.com/' },
  { id: 12, logo: require('../../../../../assets/img/ifood.png'), cashback: 45, link: 'https://www.ifood.com/' },
];


const EmpresaItem = ({ logo, cashback, link }) => {
  const handlePress = () => {
    Linking.openURL(link);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.cashback}>{cashback}% de cashback</Text>
    </TouchableOpacity>
  );
};

export const Empresas = () => {
  return (
    <FlatList
      data={empresas}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <EmpresaItem logo={item.logo} cashback={item.cashback} link={item.link} />}
      contentContainerStyle={styles.container}
    />
  );
};