import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Style';

export const Header = () => {
    return (
        <View style={styles.baseHeader}>
            <View style={styles.baseHeaderTop}>
                <View style={styles.baseHeaderTopTitle}>
                    <View style={styles.baseHeaderTopTitleProfile}>
                        <View style={styles.baseHeaderTopTitleProfileIco}>
                            <Image style={styles.baseHeaderIco}
                                source={require('../../../../../assets/imgPlus.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.baseHeaderTopTitleAction}>
                        <Image style={styles.baseHeaderIco}
                            source={require('../../../../../assets/eye.png')}
                        />
                        <Image style={styles.baseHeaderIco}
                            source={require('../../../../../assets/help.png')}
                        />
                        <Image style={styles.baseHeaderIco}
                            source={require('../../../../../assets/account.png')}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.baseHeaderBotton}>
                <View style={styles.baseHeaderBottonCard}>
                    <View style={styles.baseHeaderBottonCardLeft}>
                        <Image style={styles.baseHeaderBottonCardLeftImg}
                            source={require('../../../../../assets/calendar.png')}
                        />
                    </View>
                    <View style={styles.baseHeaderBottonCardCenter}>
                        <Text style={styles.baseHeaderBottonCardText}>
                            Negocie já o saldo em aberto da sua fatura
                        </Text>
                    </View>
                    <View style={styles.baseHeaderBottonCardRight}>
                        <Image style={styles.baseHeaderBottonCardRightImg}
                            source={require('../../../../../assets/menu.png')}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}