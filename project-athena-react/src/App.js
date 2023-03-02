import {Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import IndexPage from "./components/IndexPage";
import LoginPage from './components/LoginPage';
import ResourcePage from './components/ResourcePage';
import EventsPage from './components/EventsPage';
import CommunityPage from './components/CommunityPage';
import RegisterPage from './components/RegisterPage';
import Contributors from './components/Contributors';
import Contact from './components/ContactUs';
import Contribute from './components/Contribute';
import { UserContextProvider } from './UserContext';




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
              <Route path='/community' element = {<CommunityPage/>}/>
              <Route path='/contact' element = {<Contact/>}/>
              <Route path='/contributors' element = {<Contributors/>}/>
              <Route path='/contribute' element = {<Contribute/>}/>
          </Route>
        </Routes>
    </UserContextProvider>
  );
}

export default App;
