import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './style';

const data = [
  { id: '1', title: 'Bezos', image: require('../../assets/img/Bezos.png'), agencia: '1285', conta_corrente: '1001905-5'},
  { id: '2', title: 'Bill', image: require('../../assets/img/bill.jpg'), agencia: '1285', conta_corrente: '1001905-5'},
  { id: '3', title: 'Elon', image: require('../../assets/img/elon.jpg'), agencia: '1285', conta_corrente: '1001905-5'},
  { id: '4', title: 'Salt', image: require('../../assets/img/Salt_Bae.png'), agencia: '1285', conta_corrente: '1001905-5'},
  { id: '5', title: 'Zuckerberg', image: require('../../assets/img/zuckerberg.jpg'), agencia: '1285', conta_corrente: '1001905-5'},
  { id: '6', title: 'Tim', image: require('../../assets/img/Tim.jpg'), agencia: '1285', conta_corrente: '1001905-5'},
  { id: '7', title: 'Rafael', image: require('../../assets/img/rafael.jpg'), agencia: '1285', conta_corrente: '1001905-5' },
  { id: '8', title: 'Gabriel', image: require('../../assets/img/gabriel.png'), agencia: '1285', conta_corrente: '1001905-5' },
  { id: '9', title: 'Jennifer', image: require('../../assets/img/jennifer.jpg'), agencia: '1285', conta_corrente: '1001905-5'},
  { id: '10', title: 'Jonas', image: require('../../assets/img/jonas.jpg'), agencia: '1285', conta_corrente: '1001905-5'},
  { id: '12', title: 'Juely', image: require('../../assets/img/juely.jpg'), agencia: '1285', conta_corrente: '1001905-5'},
  { id: '13', title: 'Luiz', image: require('../../assets/img/luiz.jpg'), agencia: '1285', conta_corrente: '1001905-5'},
];

const renderItem = ({ item }) => (
  <View style={styles.baseLine}>
    <View>
      <Image source={item.image} style={styles.baseLineImg} />
    </View>
    <View style={styles.baseLineCenter}>
      <View>
        <Text style={styles.baseLineTex}>{item.title}</Text>
      </View>
      <View style={styles.baseLineTexBank}>
        <Text style={styles.baseLineTexBankTex}>{'Agencia:'+item.agencia}</Text>
        <Text style={styles.baseLineTexBankTex}>{'Conta:'+item.conta_corrente}</Text>
      </View>
    </View>
    <View style={styles.baseTransf}>
      <Image style={styles.baseTransfIcon} source={require('../../assets/pix.png')}/>
    </View>
  </View>
);

export const Lista = () => {
  return (
    
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}