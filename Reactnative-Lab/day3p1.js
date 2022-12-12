import { View, Text, Button, SafeAreaView, Alert, TouchableOpacity,StyleSheet } from "react-native";
import React from "react";

const App = () => {
  return (
    <SafeAreaView>
     < View>
      <TouchableOpacity style={styles.cont}
      onPress={()=>{
        Alert.alert('yyyy','uuuu',[
          {
            text:'ssssaaaaass'
          },
          {
            text:'skkksssss'
          },
          {
            text:'sslllllllssss'
          },
          {
            text:'sssmmmmsss'
          },
        ])
      }}>
        <Text>press ...</Text>
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
};

const styles =StyleSheet.create({
  cont: {
    margin: 70
  }
})

