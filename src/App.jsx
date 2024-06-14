import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  // State variables for storing posts and error message
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('null');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setPosts(data);
      }
      catch (error) {
        setError(error.message);
      }
    };
    fetchPosts();
  }, []);
 
  if (error) {
    return ( <div className = "error-message">
      <h1>Failed to fetch blog posts</h1>
    </div>
    );
  }
  
  return (     <
    div className="app-container">       
    <h1>Posts</h1> {/Main heading for the blog posts/}       
    <div className="blog-posts">         
    {posts.map((post, index) => (           
    <div key={post.id} className="post">            
    {/* Display the post title with a sequential number*/}             
    <h2>               {index + 1}.{post.title}             </h2> 
                {/ Display the post body */}  
                           <p>{post.body}</p>  
                                    </div>      
                                       ))}       
                                       </div>     
                                       </div>  
                                       );
                                       }