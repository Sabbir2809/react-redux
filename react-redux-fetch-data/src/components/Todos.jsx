import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todosAction';

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div className='container'>
      <h2 className='text-success'>Todos App</h2>
      {isLoading && (
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      )}
      {error && (
        <div className='alert alert-danger' role='alert'>
          {error.message}
        </div>
      )}
      <section>
        {todos.map((todo) => {
          const { id, title } = todo;
          return (
            <article key={id}>
              <p>{id}</p>
              <h4>{title}</h4>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Todos;
