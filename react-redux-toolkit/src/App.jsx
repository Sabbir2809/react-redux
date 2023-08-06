import React from 'react';
import Counter from './features/counter/Counter';
import Post from './features/posts/Post';

const App = () => {
  return (
    <div>
      <h1>React-Redux-Toolkit</h1>
      <Counter />
      <Post />
    </div>
  );
};

export default App;
