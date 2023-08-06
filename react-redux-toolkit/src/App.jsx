import React from 'react';
import Counter from './features/counter/Counter';
import Post from './features/posts/Post';

const App = () => {
  return (
    <div className='container mt-4'>
      <h1 className='text-center text-primary'>React-Redux-Toolkit</h1>
      <Counter />
      <Post />
    </div>
  );
};

export default App;
