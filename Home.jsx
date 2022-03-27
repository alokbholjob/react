import React,{useEffect, useState} from 'react'
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "My new website", body: "lorem ipsum....", author: "Mario", id:1},
    {title: "Welcome party !", body: "lorem ipsum....", author: "Alok", id:2},
    {title: "Web dev tips", body: "lorem ipsum....", author: "Mario", id:3},
  ]);

  const [name, setName] = useState("Mario");

  const handleDelete = (id) =>{
    const newBlogs = blogs.filter((blog)=> blog.id !== id ); //newBlogs will store the filtered data
    setBlogs(newBlogs);
  } 

  /* The second argument [] of the useEffect hook controls when the next function should run. 
  If we remove the second argument(depedency array) this hook will re-render the function */ 
  useEffect(()=>{
    console.log("useEffect ran");
    console.log(name);
  }, [name]);

  return (
    <div className='home'>
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter( (blog)=> blog.author === 'Mario' ) } title="Mario's Blog" />
      <button onClick={()=>setName("Luigie") } > Change Name  </button>
    </div>
  )
}

export default Home;