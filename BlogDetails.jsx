import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './UseFetch';

const BlogDetails = () => {

    const {id} = useParams(); //this hook helps us to grab the url with an id----> /blogs/232 | route parameter
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id); 

  return (
    <div className='blog-details'>
        { isLoading && <div>Loading...</div> }
        { error && <div>{error} </div>}
        { blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written By {blog.author}</p>
                <div>{blog.body}</div>
            </article>
        )}
    </div>
  )
}

export default BlogDetails;