import React, { useState } from 'react'

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [authorName, setAuthorName] = useState('Mario');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog ={title, body, authorName};

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { "Content-Type" : "Application/json" },
            body: JSON.stringify(blog) 
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
        })
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

         { !isPending && <button>Add Blog</button>}
         { isPending && <button disabled> Adding Blog... </button> }
     </form>
     </div>
  )
}

export default Create;