import React from 'react';

function PostCard({ post }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <h6 className="card-subtitle text-muted">Posted by {post.author}</h6>
        <p className="card-text mt-2">{post.content}</p>
        {post.createdAt && (
          <small className="text-muted">
            {new Date(post.createdAt).toLocaleString()}
          </small>
        )}
      </div>
    </div>
  );
}

export default PostCard;