
import NavBar from './NavBar'
import PageNotFound from './PageNotFound'
import College from './College'
import UserList from './UserList'
import UserDetail from './UserDetails'

function App() {

  return (
    <>
      {/* <NavBar /> */}
      <Routes>


        <Route element={<NavBar />}>
          <Route path='/users/list?' element={<UserList />} />
          
          <Route path='/users/:id/:name?' element={<UserDetail />} />

         

         <Route path='in'>
         <Route path='/in/user'>
         </Route>
         </Route>

        </Route>

        <Route path="/college" element={<College />}>

        </Route>

        <Route path='/*' element={<PageNotFound />} />
        {/* <Route path='/*' element={<Navigate to="/" />} /> */}




      </Routes>
    </>
  )
}

export default App