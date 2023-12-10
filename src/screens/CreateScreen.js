import React, { useContext } from 'react'
import {StyleSheet} from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
    const { addBlog } = useContext(Context)

    return <BlogPostForm onSubmit ={(title, content)=>{
        addBlog(title, content, ()=>{
            navigation.navigate('Blogs')
        })
    }} />
    
  
}


const styles = StyleSheet.create( {
    

})
export default CreateScreen