import React from 'react'
import{lazy,Suspense} from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'

const Home=lazy(()=>import('./components/Home'))
const Quiz=lazy(()=>import('./components/Quiz'))
const Result=lazy(()=>import('./components/Result'))
const SkillTree=lazy(()=>import('./components/SkillTree'))
const DailyFeed=lazy(()=>import('./components/DailyFeed'))

function App() {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<div>Loading ...</div>}>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/result'element={<Result/>}/>
      <Route path='/skillTree'element={<SkillTree/>}/>
      <Route path='/dailyFeed'element={<DailyFeed/>}/>

     </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App