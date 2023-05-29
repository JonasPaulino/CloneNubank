import { StyleSheet } from 'react-native';

export default StyleSheet.create({
baseLine: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        },
baseLineImg: {
        width: 34,
        height: 34,
        borderRadius: 25,
        marginRight: 10,
        // borderRadius: 25,
        // marginRight: 10,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    baseLineTex: {
        fontWeight: 'bold',
    },
    baseLineTexTitle: {
        fontSize: 20,
        top: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        backgroundColor: 'white',
        height: 40
    },
        flatList: {
        paddingTop: 50
    },
    baseLineCenter: {
        flexDirection: 'column',
        flex: 1
    },
    baseLineTexBank:{
        flexDirection: 'row'
    },
    baseLineTexBankTex: {
        marginRight: 10
    },
    baseTransfIcon: {
        height: 20,
        width: 20,
        marginRight: 10,
        justifyContent: 'center',
        alignContent: 'center'
    }
})