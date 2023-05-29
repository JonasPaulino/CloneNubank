import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import styles from './style';

  export const Cartoes = () => {
    return (
        <View style={styles.card}>                            
          <Image
            style={styles.ico} 
            source={require('../../../../../assets/credit-card-chip-outline.png')} />
          <Text>Meus Cartões</Text>
        </View>
    );
  }