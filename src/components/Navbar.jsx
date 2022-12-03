//로그인 버튼을 누르면 로그인 페이지가 뜨게
import React from 'react';
import { BsSearch, BsList, BsXLg } from 'react-icons/bs';
import { RiLogoutBoxFill, RiLoginBoxLine } from 'react-icons/ri';
import './Navbar.scss';
import '../App.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar({ authenticate, setAuthenticate }) {
  const [sideState, setSideState] = useState('-100%');
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M HOME',
    '스포츠',
    'Sale',
    '지속가능성',
  ];
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate('/login');
  };

  const search = (event) => {
    if (event.key === 'Enter') {
      //console.log('key Press');  //엔터를 눌렀을때만 반응
      let keyword = event.target.value; //js와 다름 event안에 value들어있음
      //console.log('keyword', keyword);
      navigate(`/?q=${keyword}`); //추가조건은 쿼리로 붙임, 키워드를 읽어와서 url에 넣어줌
    }
  };

  return (
    <div>
      <div className="side-menu" style={{ left: sideState }}>
        <div className="closebtnWrap">
          <BsXLg className="closebtn" onClick={() => setSideState('-100%')} />
        </div>
        <div className="side-menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </div>
      </div>

      <div className="burger-menu hide">
        <BsList
          onClick={() => {
            setSideState('0');
          }}
        />
      </div>

      <div className="login-btnWrap">
        {authenticate ? (
          <div className="login-btn" onClick={() => setAuthenticate(false)}>
            <RiLogoutBoxFill /> <span>로그아웃</span>
          </div>
        ) : (
          <div className="login-btn" onClick={gotoLogin}>
            <RiLoginBoxLine />
            <span>로그인</span>
          </div>
        )}
        {console.log('현재 로그인 상태는?', authenticate)}
      </div>
      <h1>
        <Link to="/">
          <img width={90} src="img/HM-Logo.png" alt="" />
        </Link>
      </h1>
      <nav>
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search">
          <BsSearch />
          <input
            type="text"
            placeholder="제품 검색"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </nav>
    </div>
  );
}

// $ npm install react-icons --save 을 이용해서 아이콘
// $ yarn add sass

// onKeyPress={search}    //모든 키를 눌렀을때 작동(e.g. ALT, CTRL, SHIFT, ESC)
