import React, {useContext, useEffect} from 'react'
import { View, Text,Image, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'

import {Context} from '../context/BlogContext'
import { Feather } from "@expo/vector-icons"

const IndexScreen = ({navigation}) => {
    const {state,  deleteBlog, getBlogs } = useContext(Context);
    console.log('THis is the index page')
    useEffect(()=>{
        console.log("This is ther use effect now")
        getBlogs();
        const listener = navigation.addListener('didFocus', ()=>{
            getBlogs()
        })
        return () =>{
            listener.remove()
        }
    },[])
   
    // console.log(data)

    // const bl

    
    // console.log(blogs.data)
  return (
    <View>
     <Text>
        IndexScreen

     </Text>
     {/* <Button title='Add Blog' onPress={()=>addBlog(`blog Post #${state.length + 1}`,"My first blog post added")} /> */}
     <Button title="Create blog" onPress={()=>navigation.navigate('Create Blog')} />
     <FlatList 
        
        data={state}
        keyExtractor={(blogPosts)=>blogPosts.id}
        renderItem={({item})=>{
            return( 
            <TouchableOpacity onPress={()=>navigation.navigate("Blog Detail",{id: item.id})}>
                <View style={styles.row}>
                    <Image style={styles.imageStyle} source={require("../../assets/forest.jpg")} />
                    <Text style={styles.titleStyle}>
                        {item.title} - {item.id}
                    </Text>
                    <TouchableOpacity onPress={()=>deleteBlog(item.id)}>
                    <Feather style={styles.icon} name="trash" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
           
            )
        }}
     />
    
    </View>
  )
};


// IndexScreen.navigationOptions = ({ navigation }) => {
//     return {
//       headerTitle: 'Your Title',
//       headerRight: () => (
//         <TouchableOpacity onPress={() => navigation.navigate('Create Blog')}>
//           <Feather name="plus" size={30} style={{ marginRight: 15 }} />
//         </TouchableOpacity>
//       ),
//     };
//   };
  
// IndexScreen.navigationOptions = ({navigation}) => {
//     return {
//         headerRight: () => (
//             <TouchableOpacity onPress={() => navigation.navigate("Create Blog")}>
//                 <Feather name="plus" size={100} />
//             </TouchableOpacity>
//         ),
//     };
// };


const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal:10,
        borderTopWidth: 1,
        // borderBottomWidth:1,
        borderColor: 'gray'
    },
    imageStyle:{
        width: 80,
        height: 80
    },
    titleStyle:{
        fontSize: 22
    },
    icon: {
        fontSize: 30
    }


})
export default IndexScreen