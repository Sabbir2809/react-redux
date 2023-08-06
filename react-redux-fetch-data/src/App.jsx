import React from 'react';
import Todos from './components/Todos';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <h1 className='text-center text-primary'>Welcome To React-Redux with Fetch Data</h1>
      <Todos />
    </div>
  );
};

export default App;

// step1: install packages
// step2: constants define
// step3: async action creator
// step4: reducer
// step5: crete store
// step6: provide store
// step7: use store
// step8: adding styling
