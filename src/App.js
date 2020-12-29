import React from 'react';
import './App.css';
import Post from './components/Post';

const posts = [
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
