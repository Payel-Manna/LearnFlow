import React from 'react';

const BlogCard = ({ blog }) => {
  return (
   
    <a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border rounded-xl p-4 hover:shadow-lg transition-all duration-300 bg-white hover:bg-gray-50"
    >
      <h4 className="text-lg font-semibold mb-2 text-blue-700">{blog.title}</h4>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Source:</strong> {blog.source}
      </p>
      <p className="text-sm text-gray-500 mb-1">
        <strong>Level:</strong> {blog.level}
      </p>
      
    </a>
  );
  
};

export default BlogCard;
