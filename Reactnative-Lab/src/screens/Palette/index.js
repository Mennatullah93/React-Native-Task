import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect } from "react";
import Box from "../../../Box/coloredButtons";
import { useNavigation, useRoute } from "@react-navigation/native";

const Palette = () => {
  const routeInformation = useRoute();
  const {setOptions} = useNavigation();
  
  useEffect(()=>{
    setOptions({
      title: routeInformation.params.name,
    });
  },[routeInformation.params.name, setOptions])
  return (
    // <View>
    //   <Text>{routeInformation.params.name}</Text>
    // </View>
    <FlatList
      data={routeInformation.params.colors}
      renderItem={({ item: { colorName, hexCode } }) => (
        <Box style={{marginRight :30,}} title={colorName} bgColor={hexCode} />
      )}
      keyExtractor={(item) => item.hexCode}
      ListHeaderComponent={
        <Text style={{
          fontSize:18,
          fontWeight:'bold',
          margin:35,
          color:'navy',
          justifyContent:'center'
        
        }}> Here are some boxes with color names</Text>
    }
    ></FlatList>
  );
};



export default Palette;
