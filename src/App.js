import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Room from './components/Room';
// import Gallery from './components/Gallery';
// import Image from './components/Image';
import Login from './components/Login';
import Registration from './components/Registration'
// import Contact from './components/Contact'
// import Blogpage from './components/Blogpage';
import WithoutNav from './components/Withoutnav';
import Withnav from './components/Withnav';
import User from './components/User';
import Profile from './components/Profile';
import Payment from './components/Payment';
import './App.css';
import Booking_list from './components/Booking_list';
import Booking from './components/Booking';

let role = localStorage.getItem('role');

function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
    <Route element={<WithoutNav />}>
      <Route exact path='/' element={< Login />} />
    </Route>
    <Route element={<WithoutNav />}>
      <Route exact path='/registration' element={< Registration />} />
    </Route>

    <Route element={<Withnav role={role}/>}>
      <Route exact path='/home' element={< Home />} />
    </Route>
    <Route element={<Withnav role={role}/>}>
      <Route exact path='/room' element={< Room />} />
    </Route>
    <Route element={<Withnav role={role}/>}>
      <Route exact path='/userlist' element={< User />} />
    </Route>
    <Route element={<Withnav role={role}/>}>
      <Route exact path='/profile' element={< Profile />} />
    </Route>
    <Route element={<Withnav role={role}/>}>
      <Route exact path='/payment' element={< Payment />} />
    </Route>
    <Route element={<Withnav role={role}/>}>
      <Route exact path='/booking_list' element={< Booking_list />} />
    </Route>
    <Route element={<Withnav role={role}/>}>
      <Route exact path='/booking' element={< Booking/>} />
    </Route>
{/* 
    <Route element={<Withnav />}>
      <Route exact path='/gallery' element={< Gallery />} /> 
    </Route>

    <Route element={<Withnav />}>
      <Route exact path='/image' element={< Image />} />
    </Route>
    <Route element={<Withnav />}>
      <Route exact path='/blogPage' element={< Blogpage />} />
    </Route>
    <Route element={<Withnav />}>
      <Route exact path='/contact' element={< Contact />} />
    </Route>
    <Route element={<Withnav />}>
      <Route exact path='/payment' element={< Payment />} />
    </Route> */}
   
      
    </Routes>
    </Router>

    </div>
  );
}

export default App;
