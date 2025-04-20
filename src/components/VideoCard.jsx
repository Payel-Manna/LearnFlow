import React from 'react';
import { Bookmark, BookmarkCheck, CheckCircle, Circle } from 'lucide-react';

const VideoCard = ({ video, onOpenModal, isBookmarked, toggleBookmark, isWatched, toggleWatched }) => {
  const { title, thumbnails, channelTitle } = video.snippet;

  return (
    <div className="border rounded p-3 hover:shadow-lg transition">
      <img
        src={thumbnails?.medium?.url}
        alt={title}
        className="w-full h-48 object-cover rounded cursor-pointer"
        onClick={onOpenModal}
      />
      <h4 className="text-md font-semibold mt-2 cursor-pointer" onClick={onOpenModal}>
        {title}
      </h4>
      <p className="text-sm text-gray-500">{channelTitle}</p>

      <div className="flex justify-between items-center mt-3">
        <button onClick={toggleBookmark} title={isBookmarked ? 'Remove Bookmark' : 'Bookmark'}>
          {isBookmarked ? <BookmarkCheck className="text-blue-500" /> : <Bookmark />}
        </button>
        <button onClick={toggleWatched} title={isWatched ? 'Mark Unwatched' : 'Mark Watched'}>
          {isWatched ? <CheckCircle className="text-green-500" /> : <Circle />}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
