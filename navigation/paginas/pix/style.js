import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container:{
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
    header: {
        marginTop: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
      },
      titulo:{
        fontSize: 28,
        fontFamily: 'arial',
     },
     subTitulo: {
      width: '100%'
     },
     subTituloValor: {
        fontWeight: 'bold',
      },  
      input: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        width: '100%'
      },
});