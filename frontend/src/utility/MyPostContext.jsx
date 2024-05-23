import React, { useState } from 'react'
import PostContext from './PostContext'


const MyPostContext = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [category,setCategory] = useState('all');
    return (
        <PostContext.Provider value={{ posts, setPosts, category, setCategory}}>
            { children }
        </PostContext.Provider>
    )
}

export default MyPostContext