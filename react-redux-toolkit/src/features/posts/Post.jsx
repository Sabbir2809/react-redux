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
    <div>
      <h2>Post App</h2>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <section>
        {posts.map((post) => {
          const { id, title, body } = post;
          return (
            <article key={id}>
              <p>Id: {id}</p>
              <h4>Title: {title}</h4>
              <p>Body: {body}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Post;
