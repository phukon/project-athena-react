import {Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import { IndexPage, LoginPage, ResourcePage, EventsPage, CommunityPage, RegisterPage, Contributors, Contribute, PageNotFound, EventsPost, BlogPosts, Blog } from "./components/Index";

import { UserContextProvider } from './UserContext';
import './App.css';




function App() {
  return (
    <UserContextProvider>
         <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<IndexPage/>}/>
              <Route path='/login' element = {<LoginPage/>}/>
              <Route path='/register' element = {<RegisterPage/>}/>
              <Route path='/resources' element = {<ResourcePage/>}/>
              <Route path='/events' element = {<EventsPage/>}/>
              <Route path="/events/:id" element={<EventsPost/>} />
              <Route path='/community' element = {<CommunityPage/>}/>
              <Route path='/blog' element = {<Blog/>}/>
              <Route path="/blog/:id" element={<BlogPosts />} />
              <Route path='/contributors' element = {<Contributors/>}/>
              <Route path='/contribute' element = {<Contribute/>}/>
              <Route path= '*' element= {<PageNotFound/>} />
          </Route>
        </Routes>
    </UserContextProvider>
  );
}

export default App;
