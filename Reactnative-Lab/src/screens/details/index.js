import { View, Text } from 'react-native'
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";



const Details = () => {

    const {params: {user}} = useRoute();
    const {setOptions} = useNavigation();

    useEffect(()=>{
        setOptions({
          user
        });
      },[setOptions, user])


  return (
    <View>
      <Text style={{color:'green',
      fontSize:37,
      fontWeight:'bold',
      fontStyle:'italic',
      margin:27
    }}>Details</Text>

                <Text style={{fontSize: 23,margin:15, color:'maroon', fontWeight:'bold' }} >User name:<Text  style={{fontSize:17, color:'black'}} > {user.username}</Text></Text>
                <Text style={{fontSize: 23,margin:15, color:'maroon', fontWeight:'bold' }} >Email : <Text  style={{fontSize:17, color:'black'}}> {user.email}</Text> </Text>
                <Text style={{fontSize: 23,margin:15, color:'maroon', fontWeight:'bold' }} >Address :<Text  style={{fontSize:17, color:'black'}}> {user.address.city}</Text></Text>
                <Text style={{fontSize: 23,margin:15, color:'maroon', fontWeight:'bold' }} >Phone : <Text style={{fontSize:17, color:'black'}} > {user.phone}</Text></Text>
                <Text style={{fontSize: 23,margin:15, color:'maroon', fontWeight:'bold' }} >Website :<Text  style={{fontSize:17, color:'black'}}> {user.website}</Text> </Text>
                <Text style={{fontSize: 23,margin:15, color:'maroon', fontWeight:'bold' }} >Company : <Text  style={{fontSize:17, color:'black'}}> {user.company.name}</Text></Text>
    
    </View>
  )
}

export default Details