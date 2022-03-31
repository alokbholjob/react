import React from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './UseFetch';

const BlogDetails = () => {

    const {id} = useParams(); //this hook helps us to grab the url with an id----> /blogs/232 | route parameter
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id); 
    const history = useHistory();

    const handleCLick = () =>{
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method:'DELETE'
      }).then(()=>{
        history.push('/');
      })
    }

  return (
    <div className='blog-details'>
        { isLoading && <div>Loading...</div> }
        { error && <div>{error} </div>}
        { blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written By {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleCLick}> Delete </button>
            </article>
        )}
    </div>
  )
}

export default BlogDetails;