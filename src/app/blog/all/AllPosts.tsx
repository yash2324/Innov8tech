import React from "react";
// Define Author type
type Author = {
  id: number;
  name: string;
  // Add more fields if needed
};

// Define Post type
type Post = {
  id: number;
  title: string;
  content: string;
  published: boolean;
  author: Author;
  imgURL?: string | null;
  createdAt: string; // Consider using Date type if you parse it
};

// Define PostProps type to ensure consistency in props
type PostProps = {
  posts: Post[];
};

// Define PostCardProps type for individual post rendering
type PostCardProps = {
  post: Post;
};

// Functional component to render a single post card
const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author?.name}</p>
      {/* Render other details like createdAt, imgURL, etc., as needed */}
    </div>
  );
};

// Functional component to render all posts using PostProps type
const AllPosts: React.FC<PostProps> = ({ posts }) => {
  return (
    <div className="all-posts">
      {posts?.posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default AllPosts;
