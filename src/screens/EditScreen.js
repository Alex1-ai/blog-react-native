import React,{ useState, useContext} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ route,navigation }) => {
    const id = route.params.id
    const { state ,editBlog  } =  useContext(Context)
    const blog = state.find((blogPost)=> blogPost.id === id);
  
    
    
  return <BlogPostForm 
  initialValues ={{ title: blog.title, content: blog.content}}
  onSubmit={(title, content) =>{
    editBlog(id, title, content, ()=>{
           navigation.pop()
    })
  }} />
}

const styles = StyleSheet.create( {
   

})

export default EditScreen