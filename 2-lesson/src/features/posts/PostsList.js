import React from 'react';
import { useSelector } from 'react-redux';

import { PostAuthor } from './PostAuthor';
import { selectAllPosts } from './postsSlice';
import { ReactionButtons } from './ReactionButtons';
import { TimeAgo } from './TimeAgo';

export const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section>
      <h2>Posts</h2>
      {orderedPost.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}</p>
          <p className='postCredit'>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
          </p>
          <ReactionButtons post={post} />
        </article>
      ))}
    </section>
  );
};
