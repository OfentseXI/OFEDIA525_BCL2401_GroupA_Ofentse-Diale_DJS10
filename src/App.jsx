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
      <h1>Data fetching failed</h1>
    </div>
    );
  }

  return (
    <div className ="app-container">
      <h1>Blog Posts</h1>
      <div className ="blog-posts">
        {posts.map((post,index) => (
          <div key = {post.id} className="post">
            <h2>{index + 1}.{post.title}</h2>
            <p>{post.body}</p>
          </div>
      ))}
      </div>
    </div>
  );
}