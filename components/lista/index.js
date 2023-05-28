import React, { useEffect, useState }  from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import axios from 'axios';

import styles from './style';

const semImage = require('../../assets/account-custom.png');

const renderItem = ({ item }) => (
  
  <View style={styles.baseLine}>
    <View>
      <Image source={item.image ? { uri: item.image } : semImage} style={styles.baseLineImg} />
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/contato');
        setData(response.data);
        //console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => item._id}
    />
  );
};
