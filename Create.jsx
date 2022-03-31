import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [authorName, setAuthorName] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

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
        //history.go(-1); go back by one page
        history.push('/'); //redirect to the home page
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
             <option value="Yamuna Anand"> Yamuna Anand </option>
             <option value="Akshaya Saini"> Akshaya Saini </option>
         </select>

         { !isPending && <button>Add Blog</button>}
         { isPending && <button disabled> Adding Blog... </button> }
     </form>
     </div>
  )
}

export default Create;