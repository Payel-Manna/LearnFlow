import React, { createContext, useContext, useEffect, useState } from "react";

const FeedContext=createContext()

export const FeedProvider=({children})=>{


const[bookmarks,setBookmarks]=useState([])
const[watched,setWatched]=useState([])

 useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (savedBookmarks) {
      console.log("Loaded bookmarks:", savedBookmarks);
      setBookmarks(savedBookmarks);
    }
  }, []); 

  // Save bookmarks to localStorage 
  useEffect(() => {
    if (bookmarks.length > 0) {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      console.log("Saved bookmarks:", bookmarks);
    }
  }, [bookmarks]);

  // Load watched from localStorage on mount
  useEffect(() => {
    const savedWatched = JSON.parse(localStorage.getItem('watched'));
    if (savedWatched) {
      console.log("Loaded watched:", savedWatched);
      setWatched(savedWatched);
    }
  }, []); 

  // Save watched to localStorage on change
  useEffect(() => {
    if (watched.length > 0) {
      localStorage.setItem('watched', JSON.stringify(watched));
      console.log("Saved watched:", watched);
    }
  }, [watched]); 

  const toggleBookmark = (video) => {
    const exists = bookmarks.find((v) => v.id.videoId === video.id.videoId);
    if (exists) {
      setBookmarks((prev) =>
        prev.filter((v) => v.id.videoId !== video.id.videoId)
      );
    } else {
      setBookmarks((prev) => [...prev, video]);
    }
  };

  const toggleWatched = (id) => {
    setWatched((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };


return (
    <FeedContext.Provider value={{ bookmarks, setBookmarks, watched, setWatched,toggleBookmark,toggleWatched }}>
      {children}
    </FeedContext.Provider>
  );
}
export const useFeed = () => useContext(FeedContext);