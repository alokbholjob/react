import React,{useEffect, useState} from 'react'
import BlogList from './BlogList';
import useFetch from './UseFetch';


/* use this command to run the json data-- npx json-server --watch folder_name/file_name --port port_number */
/* The second argument [] of the useEffect hook controls when the next function should run. 
If we remove the second argument(depedency array) this hook will re-render the function */ 

const Home = () => {

  const { data: blogs, setData, isLoading, error } = useFetch('http://localhost:8000/blogs');
  //const [name, setName] = useState("Mario");

  const handleDelete = (id) =>{
    const newBlogs = blogs.filter((blog)=> blog.id !== id ); //newBlogs will store the filtered data
    //setBlogs(newBlogs);
    setData(newBlogs);
  } 

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
