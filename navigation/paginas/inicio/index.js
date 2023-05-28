import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import { View, Text, ScrollView } from 'react-native';
import { Header } from './components/header';
import { Conta } from './components/conta';
import { IconBar } from './components/butoes';
import { Cartoes } from './components/cartoes';
import { Noticias } from './components/noticias';
import { Fatura } from './components/fatura';
import { AppContext } from '../../../context';
import styles from './style';

export default function Inicio() {
    const { saldoConta, setSaldoConta } = useContext(AppContext);
    const { totalFatura, setTotalFatura } = useContext(AppContext);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/totais');
            setSaldoConta(response.data.saldoConta);
            setTotalFatura(response.data.totalFatura);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);


    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Header />
                <Conta saldo={saldoConta}/>
                <IconBar/>
                <Cartoes />
                <Noticias />
                <Fatura total={totalFatura}/>
            </View>
        </ScrollView>
    );
}