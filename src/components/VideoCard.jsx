import React from 'react';
import { Bookmark, Eye, EyeOff } from 'lucide-react';

function VideoCard({ video, onOpenModal, isBookmarked, toggleBookmark, isWatched, toggleWatched }) {
  const videoId = video.id.videoId;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-3">
      <div
        className="cursor-pointer overflow-hidden rounded-xl"
        onClick={onOpenModal}
      >
        <img
          src={thumbnailUrl}
          alt={video.snippet.title}
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>

      <div className="mt-3">
        <h4 className="font-semibold text-lg line-clamp-2">{video.snippet.title}</h4>
        <p className="text-sm text-gray-500 mt-1">{video.snippet.description}</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={toggleBookmark}
          className={`text-sm flex items-center gap-1 ${isBookmarked ? 'text-yellow-500' : 'text-gray-500 hover:text-yellow-500'}`}
        >
          <Bookmark size={18} />
          {isBookmarked ? 'Bookmarked' : 'Bookmark'}
        </button>

        <button
          onClick={toggleWatched}
          className={`text-sm flex items-center gap-1 ${isWatched ? 'text-green-500' : 'text-gray-500 hover:text-green-500'}`}
        >
          {isWatched ? <EyeOff size={18} /> : <Eye size={18} />}
          {isWatched ? 'Watched' : 'Mark Watched'}
        </button>
      </div>
    </div>
  );
}

export default VideoCard;

