import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <a
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border p-4 rounded hover:shadow-md transition"
    >
      <h4 className="font-bold text-lg mb-1">{blog.title}</h4>
      <p className="text-sm text-gray-600">{blog.description}</p>
    </a>
  );
};

export default BlogCard;
