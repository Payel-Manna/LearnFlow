import React from 'react'
import{lazy,Suspense} from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { QuizContextProvider } from './context/QuizContext'
import { SkillProvider } from './context/SkillContext'
import { FeedProvider } from './context/FeedContext'



const Home=lazy(()=>import('./components/Home'))
const Quiz=lazy(()=>import('./components/Quiz'))
const Result=lazy(()=>import('./components/Result'))
const SkillTree=lazy(()=>import('./components/SkillTree'))
const SkillCard=lazy(()=>import('./components/SkillCard'))
const AddSkillForm=lazy(()=>import('./components/AddSkillForm'))
const DailyFeed=lazy(()=>import('./components/DailyFeed'))
const VideoCard=lazy(()=>import('./components/VideoCard'))
const VideoModal=lazy(()=>import('./components/VideoModal'))
const BookmarkPage=lazy(()=>import('./components/BookmarkPage'))

function App() {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<div>Loading ...</div>}>
    <FeedProvider>
    <SkillProvider>
          <QuizContextProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/quiz' element={<Quiz />} />
              <Route path='/result' element={<Result />} />
              <Route path='/skillTree' element={<SkillTree />} />
              <Route path='/skillCard' element={<SkillCard />} />
              <Route path='/addSkillForm' element={<AddSkillForm />} />
              <Route path='/dailyFeed' element={<DailyFeed />} />
              <Route path='videoCard' element={<VideoCard/>}/>
              <Route path='bvideoModal' element={<VideoModal/>}/>
              <Route path='bookmarkPage' element={<BookmarkPage/>}/>
            </Routes>
          </QuizContextProvider>
        </SkillProvider>
        </FeedProvider>
     
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App