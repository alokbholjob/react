import React,{useEffect, useState} from 'react'
import BlogList from './BlogList';


/* use this command to run the json data-- npx json-server --watch folder_name/file_name --port port_number */
/* The second argument [] of the useEffect hook controls when the next function should run. 
If we remove the second argument(depedency array) this hook will re-render the function */ 

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [name, setName] = useState("Mario");
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = (id) =>{
    const newBlogs = blogs.filter((blog)=> blog.id !== id ); //newBlogs will store the filtered data
    setBlogs(newBlogs);
  } 

  useEffect(()=>{
    setTimeout(()=>{
      fetch('http://localhost:8000/blogs')
      .then(res =>{
        return res.json()
      })
      .then(data =>{
        setBlogs(data);
        setIsLoading(false);
      })
    },(1000));    
  }, []);

  return (
    <div className='home'>
      {isLoading && <div>Loading...</div>}
    {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}

      {/* <BlogList blogs={blogs.filter( (blog)=> blog.author === 'Mario' ) } title="Mario's Blog" /> */}
      {/* <button onClick={()=>setName("Luigie") } > Change Name  </button> */}
    </div>
  )
}
export default Home;
