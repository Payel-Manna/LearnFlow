import React, { createContext, useContext, useState } from "react";

const FeedContext=createContext()

export const FeedProvider=({children})=>{

const[preference,setPreference]=useState({topics:[],level:Beginner})
const[bookmarks,setBookmarks]=useState([])
const[watched,setWatched]=useState([])

return (
    <FeedContext.Provider value={{ preferences, setPreferences, bookmarks, setBookmarks, watched, setWatched }}>
      {children}
    </FeedContext.Provider>
  );
}