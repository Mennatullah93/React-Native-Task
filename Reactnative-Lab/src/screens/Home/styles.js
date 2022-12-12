import { StyleSheet } from "react-native";


export default StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding: 25,
        justifyContent: 'space-evenly',
        borderColor: 'green',
        marginBottom: 501
    },
    colorItem:{
        width:25,
        height:25,
        borderWidth:1,
        borderColor:'black',
        marginHorizontal:3,
        borderRadius:25,
    },
    
    colorsContainer:{
        flexDirection:'row',
    },
    titleStyle:{
        fontSize:18,
        // fontWeight:600,
      color:'maroon',
      backgroundColor:'skyblue',
      borderColor: 'red',
      height:35,
    //   width:307,
      borderRadius: 50,
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
    //   padding:17
    // margin:10
    }

})