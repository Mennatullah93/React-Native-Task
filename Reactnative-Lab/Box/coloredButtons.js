
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from './styles'

const Box = ({bgColor, title}) => {
  return (
    <View style={StyleSheet.flatten([
        styles.container,
        {
        backgroundColor: bgColor
        },
        ])}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Box

