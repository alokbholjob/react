import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const BlogDetails = () => {

    const {id} = useParams(); //this hook helps us to grab the url with an id----> /blogs/232 | route parameter

  return (
    <div className='blog-details'>
        <h2>Blog Details : {id} </h2>
    </div>
  )
}

export default BlogDetails;