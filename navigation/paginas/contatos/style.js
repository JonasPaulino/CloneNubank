import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container:{
    backgroundColor: 'white',
    height: '100%'
  },
    header: {
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,

      },
      titulo:{
        fontSize: 20
      }
});