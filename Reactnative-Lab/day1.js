import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { React } from "react";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{ fontSize: 27, marginTop: 30 }}> <Text> Welcome </Text> every One</Text>
          {/* <Text>
             Welcome every <Text style={{color: 'green'}}>One</Text>   
            </Text> */}
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
