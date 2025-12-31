import React from 'react'
import{Route, Routes} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import DetailPage from './DetailPage'
function RouterPage() {
  return (
    <div>
<Routes>
    <Route path='' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/details/:id' element={<DetailPage/>}/>
</Routes>
      
    </div>
  )
}

export default RouterPage
