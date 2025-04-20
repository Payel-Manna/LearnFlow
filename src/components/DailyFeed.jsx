import React, { useEffect, useState } from 'react';
import { useFeed } from '../context/FeedContext';
import VideoCard from './VideoCard';
import VideoModal from './VideoModal';
import BlogCard from './BlogCard';

function DailyFeed() {
  const { bookmarks, toggleBookmark, watched, toggleWatched } = useFeed();
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [loading, setLoading] = useState(false);
  const [showCount, setShowCount] = useState(6);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  console.log('API Key:', API_KEY);

  // const fetchYouTubeVideos = async (query, maxResults = 12) => {
  //   try {
  //     const res = await fetch(
  //       `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${encodeURIComponent(
  //         query
  //       )}&type=video&maxResults=${maxResults}`
  //     );
  //     const data = await res.json();
  //     console.log(data)
  //     return data.items;
  //   } catch (err) {
  //     console.error('Error fetching YouTube videos:', err);
  //     return [];
  //   }
  // };

  // NOTE: Using mock video data due to YouTube API quota limit exceeded for the day
const fetchYouTubeVideos = async () => {
  // Simulated YouTube video data
  const mockVideos = [
    {
      id: { videoId: 'Ke90Tje7VS0' },
      snippet: {
        title: 'Intro to React in 15 Minutes',
        thumbnails: {
          medium: {
            url: 'https://i.ytimg.com/vi/Ke90Tje7VS0/mqdefault.jpg',
          },
        },
        channelTitle: 'Codevolution',
        description: 'Learn React quickly and efficiently.',
      },
    },
    {
      id: { videoId: 'W6NZfCO5SIk' },
      snippet: {
        title: 'JavaScript Tutorial for Beginners',
        thumbnails: {
          medium: {
            url: 'https://i.ytimg.com/vi/W6NZfCO5SIk/mqdefault.jpg',
          },
        },
        channelTitle: 'Programming with Mosh',
        description: 'Learn JavaScript from scratch.',
      },
    },
    {
      id: { videoId: 'pQN-pnXPaVg' },
      snippet: {
        title: 'HTML Full Course – Beginner to Pro',
        thumbnails: {
          medium: {
            url: 'https://i.ytimg.com/vi/pQN-pnXPaVg/mqdefault.jpg',
          },
        },
        channelTitle: 'Bro Code',
        description: 'Full HTML course for beginners.',
      },
    },
    {
      id: { videoId: 'yfoY53QXEnI' },
      snippet: {
        title: 'CSS Crash Course for Beginners',
        thumbnails: {
          medium: {
            url: 'https://i.ytimg.com/vi/yfoY53QXEnI/mqdefault.jpg',
          },
        },
        channelTitle: 'Traversy Media',
        description: 'Crash course to master CSS fast.',
      },
    },
  ];
  
  
  return mockVideos;
};


  const fetchBlogPosts = async () => {
    
    const mockBlogs = [
      {
        id: 1,
        title: 'Mastering React Basics',
        url: 'https://example.com/react-basics',
        description: 'A deep dive into React for beginners.',
      },
      {
        id: 2,
        title: 'Understanding JavaScript Closures',
        url: 'https://example.com/js-closures',
        description: 'Learn how closures work with examples.',
      },
    ];
    setBlogs(mockBlogs);
  };

  const loadVideos = async () => {
    setLoading(true);
    const query =
      searchQuery.trim() === ''
        ? 'web development tutorial beginner'
        : `${searchQuery} ${level} programming tutorial tech`;
    // const data = await fetchYouTubeVideos(query);
    const data = await fetchYouTubeVideos(); // since the mock doesn’t use `query`

    console.log(data);
    setVideos(data);
    setLoading(false);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      console.log('Fetching videos...');
      loadVideos();
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchQuery, level]);

  useEffect(() => {
    fetchBlogPosts();
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
        </select>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">📚 Recommended Blogs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <p>Loading videos...</p>
        ) : videos.length === 0 ? (
          <p>No videos found. Try another topic or level.</p>
        ) : (videos.slice(0, showCount).map((video) => (
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

      {!loading && videos.length > showCount && (
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
