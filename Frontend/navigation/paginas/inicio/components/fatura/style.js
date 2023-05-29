import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    baseHeader: {
      
     },
     baseHeaderTitle: {
        padding: 20,
        paddingBottom: 0,
        flexDirection: 'row'
     },
     baseHeaderTitleConta: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500'
     },
     baseHeaderTitleIco: {
        width: 10,
        height: 24
     },
     baseHeaderTitleValor:{
        fontSize: 20,
        paddingLeft: 20,        
     },
     button: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    viewBotao:{
      paddingLeft: 20,
      width: '40%'

    }
});