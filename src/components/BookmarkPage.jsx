import React, { useState } from 'react';
import { useFeed } from '../context/FeedContext';
import VideoCard from './VideoCard';
import VideoModal from './VideoModal'; // Assuming you have a VideoModal component

function Bookmarks() {
  const { bookmarks } = useFeed();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  // Function to open modal and set the current video
  const openModal = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🔖 Bookmarked Videos</h2>
      {bookmarks.length === 0 ? (
        <p>You haven't bookmarked any videos yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookmarks.map((video) => (
            <VideoCard
              key={video.id.videoId}
              video={video}
              onOpenModal={() => openModal(video)}  // Passing the video to openModal
            />
          ))}
        </div>
      )}

      {isModalOpen && currentVideo && (
        <VideoModal video={currentVideo} onClose={closeModal} />  // Assuming you have a VideoModal component
      )}
    </div>
  );
}

export default Bookmarks;


