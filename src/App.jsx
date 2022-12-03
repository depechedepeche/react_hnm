//로그인을 했을때만 ProductDetail이 보여야 한다 -> route폴더 privateRoute.jsx을 따로 만든다
//nav에 authenticate, setAuthenticate 전달해서 로그인, 로그아웃 나오게

import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './components/Navbar';
import PrivateRoute from './route/PrivateRoute';

/*
  1. 전체상품페이지, 로그인, 상품상세페이지
  1-1. 네비게이션 바
  2. 전체상품페이지 - 전체상품을 볼 수 있다
  3. 로그인 버튼을 누르면 로그인 페이지 나옴
  3. 상품디테일을 눌렀으나, 로그인이 안되있을 경우에는 로그인페이지가 나옴
  4. 로그인이 되어 있을때는 상품디테일 페이지 볼 수 있음
  5. 로그아웃 버튼을 클릭하면 로그아웃이 됨
  6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없음. 다시 로그인 페이지가 보인다 
  7. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다
  8. 상품을 검색할 수 있다
*/
const App = () => {
  const [authenticate, setAuthenticate] = useState(false);
  //로그인 상태구분(처음엔 로그인 안된 상태)-login으로 감

  //login.jsx설정 후 확인

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
};

export default App;

//Routes 는 Route를 스위치 해주는 역할
