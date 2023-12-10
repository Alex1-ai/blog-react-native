// BlogContext.js

import createDataContext from './createDataContext';
// const BlogContext = createContext();

const blogReducer = (state, action) => {
  // Define your reducer logic here
  // This is just a placeholder
  switch (action.type) {
    case 'ADD_BLOG':
      return [...state, { id:Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content }];
    // other cases...
    case 'DELETE_BLOG':
        return state.filter((blogPost)=>blogPost.id !== action.payload.id);
    case 'EDIT_BLOG':
      return state.map((blogPost)=>blogPost.id === action.payload.id
            ? action.payload
            : blogPost
      
      );
    default:
      return state;
  }
};
 
const editBlog = (dispatch) =>{
  return (id, title, content, callback)=>{
    dispatch({ type: 'EDIT_BLOG', payload: {id, title, content}})
    if(callback){
      callback()

    }
    
  }
}
const addBlog =(dispatch) =>{
    return (title, content, callback) => {
    dispatch({ type: 'ADD_BLOG', payload: { title, content } });
    if (callback){
      callback()

    }
    
  };
}

const deleteBlog = dispatch =>{
    return (id) =>{
        dispatch({type:'DELETE_BLOG',payload:{id}})
    }
}


// export const BlogProvider = ({ children }) => {
//   const blogPosts = [
//     { title: 'Blog Post #1'},
//     { title: 'Blog Post #2'}
//   ]
// //   const [state, dispatch] = useReducer(blogReducer, [1,2,3,4]);
//   const [state, dispatch] = useReducer(blogReducer, blogPosts);

  

//   // Other context values and actions can be defined here

//   return (
//     <BlogContext.Provider value={{ data: state, addBlog }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;
export const {Context, Provider} = createDataContext(
    blogReducer,
    { addBlog, editBlog, deleteBlog},
    [
      // {id:"1","title":"blog 1",'content':"blog content "},
      // {id:"2","title":"blog 2",'content':"blog content "},
      // {id:"3","title":"blog 3",'content':"blog content "},
            
    ]
    )