import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className='container bg-dark p-4'>
      <h2 className='text-center text-white m-4'>Welcome To React-Redux with Counter App</h2>
      <Counter />
    </div>
  );
};

export default App;
