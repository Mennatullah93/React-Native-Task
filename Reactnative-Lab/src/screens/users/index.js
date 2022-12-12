import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation, Navigation } from '@react-navigation/native';
import routes from "../../common/routes";
import Details from "../details";


const Users = () => {
    const {navigate} = useNavigation();
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.json())
        .then((jsonData) => {
        setUsers(jsonData);
        });
    }, [])
  return (
    <View>
      <Text>Total number of Users is: {users.length}</Text>



      <FlatList 
      data={users}
      renderItem={({item}) =>
       <View style={{flex:1}}>
            <Pressable onPress={()=>{navigate(routes.details, {
                user: item
            })}}>
        <Text style={{
            backgroundColor:'green',
            height:57,
            
            borderRadius:25,
            marginLeft:300,
            color:'white',
            padding:19


        }}> {item.name} </Text>
            </Pressable>

        <Text style={{
            backgroundColor:'navy',
            height:57,
            // width:77,
            borderRadius:25,
            marginRight:300,
            color:'white',
            padding:19
            
            
        }} > {item.username} </Text>
      </View>}
      />
      
    </View>
  );
};

export default Users;
