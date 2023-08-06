import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';
import './../../assets/css/Post.css';

const Post = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className='container'>
      <h2 className='text-center mt-3'>Post App</h2>
      {isLoading && (
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      )}

      {error && (
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
      )}

      <section>
        {posts.map((post) => {
          const { id, title, body } = post;
          return (
            <article className='card' key={id}>
              <div className='card-header'>
                <p>Id: {id}</p>
                <h4 className='text-success'> {title}</h4>
              </div>
              <div className='card-body'>
                <p className='text-secondary'>{body}</p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Post;
