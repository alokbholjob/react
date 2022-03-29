import React,{useEffect, useState} from 'react'
import BlogList from './BlogList';


/* use this command to run the json data-- npx json-server --watch folder_name/file_name --port port_number */

const Home = () => {
  // const [blogs, setBlogs] = useState([
  //   {
  //     title: "My first Blog",
  //     body: "This is a react tutorial instructed by youtuber The NetNinja",
  //     author: "Mario",
  //     id: 1
  //   },
  //   {
  //     title: "Youtube learning",
  //     body: "Learn the concepts, be technically strong",
  //     author: "Yoshi",
  //     id: 2
  //   }
  // ]);

const [blogs, setBlogs] = useState(null);
  const [name, setName] = useState("Mario");

  const handleDelete = (id) =>{
    const newBlogs = blogs.filter((blog)=> blog.id !== id ); //newBlogs will store the filtered data
    setBlogs(newBlogs);
  } 

  /* The second argument [] of the useEffect hook controls when the next function should run. 
  If we remove the second argument(depedency array) this hook will re-render the function */ 
  useEffect(()=>{
    fetch('http://localhost:8000/blogs')
    .then(res =>{
      return res.json()
    })
    .then(data =>{
      setBlogs(data);
    })
  }, []);

  return (
    <div className='home'>
    {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}

      {/* <BlogList blogs={blogs.filter( (blog)=> blog.author === 'Mario' ) } title="Mario's Blog" /> */}
      {/* <button onClick={()=>setName("Luigie") } > Change Name  </button> */}
    </div>
  )
}

export default Home;
