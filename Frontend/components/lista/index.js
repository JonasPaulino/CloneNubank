import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
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
        <Text style={styles.baseLineTexBankTex}>{'Agencia:' + item.agencia}</Text>
        <Text style={styles.baseLineTexBankTex}>{'Conta:' + item.conta_corrente}</Text>
      </View>
    </View>
    <View style={styles.baseTransf}>
      <Image style={styles.baseTransfIcon} source={require('../../assets/pix.png')} />
    </View>
  </View>
);

export const Lista = ({ searchValue }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/contato');
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchValue.trim() === '') {
      setFilteredData(data);
    } else {
      const filteredItems = data.filter(item =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredItems);
    }
  }, [data, searchValue]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredData.map(item => (
          <View key={item._id}>{renderItem({ item })}</View>
        ))}
      </ScrollView>
    </View>
  );
};