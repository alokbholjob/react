import React,{useEffect, useState} from 'react'
import BlogList from './BlogList';


/* use this command to run the json data-- npx json-server --watch folder_name/file_name --port port_number */
/* The second argument [] of the useEffect hook controls when the next function should run. 
If we remove the second argument(depedency array) this hook will re-render the function */ 

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [name, setName] = useState("Mario");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) =>{
    const newBlogs = blogs.filter((blog)=> blog.id !== id ); //newBlogs will store the filtered data
    setBlogs(newBlogs);
  } 

  useEffect(()=>{
    setTimeout(()=>{
      fetch('http://localhost:8000/blogsaa')
      .then(res =>{
        if(!res.ok){ //checking the status-200 is ok or not if not handling the error
          throw Error('could not fetch the data for that resource'); //throwing the error
        }
        return res.json()
      })
      .then(data =>{
        setBlogs(data);
        setIsLoading(false);
        setError(null); //here the connection is OK so...
      })
      // to handle the error
      .catch(err =>{
        setIsLoading(false); //becoz while rendering the error message the Loading object is showing, so we don't want that
        setError(err.message); //catch the error
        console.log(err.message); 
      })
    },(1000));    
  }, []);

  return (
    <div className='home'>
      {error && <div> {error} </div> } 
      {isLoading && <div>Loading...</div>}
    {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}

      {/* <BlogList blogs={blogs.filter( (blog)=> blog.author === 'Mario' ) } title="Mario's Blog" /> */}
      {/* <button onClick={()=>setName("Luigie") } > Change Name  </button> */}
    </div>
  )
}
export default Home;
