import React from 'react'

const BlogList = (props) =>{
    //another way by destructuring--> (props)/ ({ title, author })
    const blogs = props.blogs;
    const title = props.title;
    //const author = props.author;

    return(
        <div className="blog-list">
            <h2>{title} </h2>
               { blogs.map( (blog)=>(
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
      ))}
        </div>
    );

}
export default BlogList;