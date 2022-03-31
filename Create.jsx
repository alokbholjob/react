import React, { useState } from 'react'

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [authorName, setAuthorName] = useState('Mario');

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog ={title, body, authorName};
        console.log(blog);
    };

  return (
    <div className='create'>
        
     <h2>Add a new blog</h2>
     <form onSubmit={handleSubmit}>
         <label>Blog Title: </label>
         <input
            type="text"
            required
            value={title}
            onChange={(e)=> setTitle(e.target.value)} //two way binding
         />
         <label>Blog Body: </label>
         <textarea 
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
        >
         </textarea>
        
         <label>Blog Author: </label>
         <select 
            required
            value={authorName}
            onChange={(e)=> setAuthorName(e.target.value)}
         >
             <option value="Mario"> Mario </option>
             <option value="Ashis"> Ashis </option>
         </select>
         <button>Add Blog</button>

         <p> {title} </p>
         <p> {body} </p>
         <p> {authorName} </p>
     </form>
     </div>
  )
}

export default Create;