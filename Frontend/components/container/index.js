import { View } from 'react-native';
import styles from './style';

export function Container({ children }){
    return(
        <View style={styles.baseContainer}>          
          { children }  
        </View>   
    )
}
