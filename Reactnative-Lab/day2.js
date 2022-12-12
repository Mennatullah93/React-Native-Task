import { View, Text, Platform,StyleSheet } from 'react-native'
import React from 'react'
import Box from './Box/coloredButtons'

const App = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}> Here are some colors </Text>

      <Box title=" Cyan: #2aa198" bgColor="#2aa198"/>
      <Box title=" Blue: #268bd2" bgColor="#268bd2"/>
      <Box title=" Magenta: #d33682" bgColor="#d33682"/>
      <Box title=" Orange: #cb4b16" bgColor={Platform.OS === 'ios' ?"#cb4b16" : 'green'}/>
<Box title=" Cyan: #2aa198" bgColor="#2aa198"/>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    marginTop: 51,
    padding: 13
  },
  title: {
    fontWeight: 'italic',
    fontSise: 19,
    marginBottom: 15
  }
})

export default App