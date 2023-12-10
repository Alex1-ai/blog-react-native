import React,{useContext} from 'react'
import { Context } from '../context/BlogContext'
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import { EvilIcons } from '@expo/vector-icons'


const ShowScreen = ({route, navigation }) => {
  console.log(route?.params.id)

  const { state } = useContext(Context);

  const blogPost = state.find((blogPost)=>blogPost.id === route.params.id)
  console.log(blogPost)
  return (
    <View>
       <Button title='Edit Blog' onPress={()=>navigation.navigate("Edit Blog", {id: blogPost.id})} />
        <Text> Title: {blogPost.title}</Text>

        <Text>
          Content: { blogPost.content }
        </Text>
        
        </View>
  )
}
ShowScreen.navigationOptions = () =>{
  return {
    headerRight: <TouchableOpacity>
      <EvilIcons name="pencil" size={30} />
    </TouchableOpacity>
  }
}
const styles = StyleSheet.create({


})

export default ShowScreen