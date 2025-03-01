// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
    <div className="home-container">
      <img
        src="/images/donghwa_logo.png"
        alt="Donghwa Logo"
        className="home-big-logo"
      />
      <h1 className="home-text">아주대학교 제40대 동아리연합회 동화</h1>

      <div className="image-row">
        {/* 동연 아주대 홈페이지 */}
        {/* <div className="image-item">
          <a href="https://www.ajou.ac.kr/kr/life/ajouclub.do" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/dhdh.png"
              alt="Donghwa Rental"
              className="row-image"
            />
          </a>
          <p className="image-description">동아리연합회 홈페이지</p>
        </div> */}

        {/* 동아리 소개집 페이지로 이동 */}
        <div className="image-item">
          <Link to="/pamphlet">
            <img
              src="/images/pamphlet_1.jpg"
              alt="Pamphlet"
              className="row-image"
            />
          </Link>
          <p className="image-description">동아리 소개집</p>
        </div>

        {/* 연간 캘린더 페이지로 이동 */}
        <div className="image-item">
          <Link to="/calendar">
            <img
              src="/images/Calendar_1.jpg"
              alt="Calendar"
              className="row-image"
            />
          </Link>
          <p className="image-description">연간 캘린더</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
