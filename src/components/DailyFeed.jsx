import React, { useState, useEffect } from 'react';
import { useFeed } from '../context/FeedContext';
import VideoCard from './VideoCard';
import VideoModal from './VideoModal';
import BlogCard from './BlogCard';
import mockVideos from '../data/videos.json';
import mockBlogs from '../data/blogs.json';

function DailyFeed() {
  const { bookmarks, toggleBookmark, watched, toggleWatched } = useFeed();

  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [showCount, setShowCount] = useState(4);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Extract video ID from YouTube URL
  const getVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v');
  };

  const formatVideos = (videos) =>
    videos.map((video) => ({
      id: { videoId: getVideoId(video.link) },
      snippet: {
        title: video.title,
        description: `Watch this video by ${video.source}`,
        level: video.level,
        tags: video.tags,
        channelTitle: video.source,
      },
    }));

  const fetchVideos = () => {
    const formatted = formatVideos(mockVideos);
    setVideos(formatted);
    setFilteredVideos(applyVideoFilters(formatted));
  };

  const fetchBlogs = () => {
    setBlogs(mockBlogs);
    setFilteredBlogs(applyBlogFilters(mockBlogs));
  };

  const applyVideoFilters = (videos) =>
    videos.filter((video) => {
      const title = video.snippet.title.toLowerCase();
      const description = video.snippet.description.toLowerCase();
      const levelMatch = video.snippet.level?.toLowerCase() === level.toLowerCase();

      return (
        (searchQuery === '' ||
          title.includes(searchQuery.toLowerCase()) ||
          description.includes(searchQuery.toLowerCase())) &&
        levelMatch
      );
    });

  const applyBlogFilters = (blogs) =>
    blogs.filter((blog) => {
      const titleMatch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
      const levelMatch = level === '' || blog.level === level;
      return titleMatch && levelMatch;
    });

  const handleSearch = () => {
    setLoading(true);
    fetchVideos();
    setFilteredBlogs(applyBlogFilters(blogs));
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
    fetchBlogs();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🎯 Today's Feed</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search topic (e.g. React, DSA, etc)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-full sm:w-2/3"
        />
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">📚 Recommended Blogs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBlogs.length === 0 ? (
            <p className="text-gray-500 italic">No blogs found.</p>
          ) : (
            filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <p>Loading videos...</p>
        ) : filteredVideos.length === 0 ? (
          <p className="text-gray-500 italic">No videos found. Try another topic or level.</p>
        ) : (
          filteredVideos.slice(0, showCount).map((video) => (
            <VideoCard
              key={video.id.videoId}
              video={video}
              onOpenModal={() => setSelectedVideo(video)}
              isBookmarked={bookmarks.some((v) => v.id.videoId === video.id.videoId)}
              toggleBookmark={() => toggleBookmark(video)}
              isWatched={watched.some((v) => v.id.videoId === video.id.videoId)}
              toggleWatched={() => toggleWatched(video)}
            />
          ))
        )}
      </div>

      {!loading && filteredVideos.length > showCount && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowCount((prev) => prev + 6)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      )}

      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </div>
  );
}

export default DailyFeed;

