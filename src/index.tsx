import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Carts from './pages/Carts/Carts';
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';
import Search from './pages/Search/Search';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<HomeTemplate/>}>
        <Route index element={<Home/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='carts' element={<Carts/>}></Route>
        <Route path='detail' element={<Detail/>}>
          <Route path=':id'></Route>
        </Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='search' element={<Search/>}></Route>
        <Route path='*' element={<Navigate to=""/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
