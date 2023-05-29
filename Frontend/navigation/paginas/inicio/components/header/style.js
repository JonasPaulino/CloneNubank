import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    baseHeader: {
        height: '25vh',
        backgroundColor: '#830ad3',
        
        // Box-Shadow
        shadowColor: '#642091',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3
      },
      baseHeaderTop: {
        flex: 1,
        padding: 20
      },
      baseHeaderBotton: {
        height: 100,
        padding: 20
      },
      baseHeaderTopTitle:{
        flexDirection: 'row'
      },
      baseHeaderTopTitleProfile:{
    
      },
      baseHeaderTopTitleAction:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end' 
      },
      baseHeaderTopTitleProfileIco:{
        height: 40,
        width: 40,
        backgroundColor: '#9434ed',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent:'center'
      },
      baseHeaderIco:{
        height: 25,
        width: 25,
        margin: 10
      },
      baseHeaderBotton:{
        padding: 20
      },
      baseHeaderBottonCard:{
        height: 60,
        borderRadius: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      baseHeaderBottonCardText:{
        color: '#642091',
        fontWeight: 500,
        fontSize: 10,
      },
      baseHeaderBottonCardLeft: {
        marginLeft: 10,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      baseHeaderBottonCardCenter:{
        flex: 1
      },
      baseHeaderBottonCardRight:{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
      },
      baseHeaderBottonCardLeftImg:{
        height: 40,
        width: 60
      },
      baseHeaderBottonCardRightImg:{
        height: 30,
        width: 35
      }
});