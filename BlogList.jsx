import React from 'react'
import { Link } from 'react-router-dom';

const BlogList = ({ blogs,title, handleDelete }) =>{
    //another way by destructuring--> (props)/ ({ title, author })
    //const blogs = props.blogs;
    //const title = props.title;

    return(
        <div className="blog-list">
            <h2>{title} </h2>
               { blogs.map( (blog)=>(
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            {/* <button onClick={()=> handleDelete(blog.id)} >Delete Blog</button> */}
            </Link>
          </div>
      ))}
        </div>
    );

}
export default BlogList;