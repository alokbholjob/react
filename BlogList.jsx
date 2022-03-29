import React from 'react'

const BlogList = ({ blogs,title, handleDelete }) =>{
    //another way by destructuring--> (props)/ ({ title, author })
    //const blogs = props.blogs;
    //const title = props.title;
    const author = blogs.author;

    return(
        <div className="blog-list">
            <h2>{title} </h2>
               { blogs.map( (blog)=>(
          <div className="blog-preview" key={blog.id}>
            <h2>{title}</h2>
            <p>Written by {author}</p>
            {/* <button onClick={()=> handleDelete(blog.id)} >Delete Blog</button> */}
          </div>
      ))}
        </div>
    );

}
export default BlogList;