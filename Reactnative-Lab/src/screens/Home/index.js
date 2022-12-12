import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles';
import routes from '../../common/routes';
import {twitterColors,  solarizedColors } from '../../common/colors'
import { useNavigation } from '@react-navigation/native';
// import {MD2LightTheme as DefaultTheme, Provider as PaperProvider} from 'react-native-paper';


const Home = () => {


  const {navigate} = useNavigation();
  const SchemeList = [{
    scheme: twitterColors,
    title: 'Twitter Colors',
  },
  {
    scheme: solarizedColors,
    title: 'Solarized Colors',
  }]
  return (
    
    <View style={styles.containerStyle}>{


      
      SchemeList.map(({scheme, title })=> (
      
      <Pressable onPress={() => navigate(routes.palette, {name: title, colors: scheme})}>
      <Text style={styles.titleStyle}> { title } </Text>
        <View style={styles.colorsContainer}>
          {scheme.slice(0,3).map(({hexCode}) =>(
            <View key={hexCode} style={[styles.colorItem, {backgroundColor: hexCode}]}/>
          ))}

        </View>
      </Pressable>
      
      ))}
      </View>
      )
    }



export default Home;