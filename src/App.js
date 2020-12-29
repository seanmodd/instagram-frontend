import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './components/Post';

const mockPosts = [
  {
    likes: 20,
    description: 'The changed description',
    image: {
      url: '/uploads/IMG_5674_cfa4616c3b.PNG',
    },
  },
  {
    likes: 33,
    description: 'The second post',
    image: {
      url: '/uploads/IMG_5674_cfa4616c3b.PNG',
    },
  },
];

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('http://localhost:1337/posts');
      const data = await response.json();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div className='App'>
      {posts.map((post) => (
        <Post
          likes={post.likes}
          description={post.description}
          url={post.image && post.image.url}
        />
      ))}
    </div>
  );
}

export default App;
