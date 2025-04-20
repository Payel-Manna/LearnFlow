import React from 'react';

const VideoModal = ({ video, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-red-500 text-xl font-bold">
          ×
        </button>
        <iframe
          className="w-full h-64 md:h-96"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <h2 className="mt-4 font-semibold text-lg">{video.snippet.title}</h2>
      </div>
    </div>
  );
};

export default VideoModal;
