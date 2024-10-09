import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Calendar from './Calendar';
import Pamphlet from './Pamphlet';
import './App.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // 메뉴 상태 (열림/닫힘)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // 버튼 클릭 시 메뉴 상태 토글
  };

  return (
    <div className="header-bar">
      <Link to="/" className="header-link">
        <img
          src="/images/donghwa_logo_circle.png"
          alt="Donghwa Logo"
          className="header-logo"
        />
        <span className="header-text">아주대학교 동아리연합회</span>
      </Link>

      {/* 햄버거 버튼 */}
      <button className="hamburger-button" onClick={toggleMenu}>
        &#9776; {/* 햄버거 아이콘 */}
      </button>

      {/* 메뉴 - 메뉴 상태에 따라 표시 여부 결정 */}
      {menuOpen && (
        <div className="dropdown-menu">
          <Link to="https://sites.google.com/ajou.ac.kr/donghwa-rent/qa?authuser=0" className="dropdown-link" target="_blank" rel="noopener noreferrer">
            대여사업
          </Link>
          <Link to="/calendar" className="dropdown-link">
            캘린더
          </Link>
          <Link to="/pamphlet" className="dropdown-link">
            소개집
          </Link>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Header /> {/* 모든 페이지에서 헤더를 렌더링 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pamphlet" element={<Pamphlet />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
};

export default App;
