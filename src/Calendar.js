import React, { useState, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './App.css';

const Calendar = () => {
  const images = Array.from({ length: 25 }, (_, i) => `/images/calendar_${i + 1}.jpg`);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = images.length;

  const flipBookRef = useRef(null);
  const [bookSize, setBookSize] = useState({ width: 700, height: 500 });

  // 화면 크기에 맞춰서 flipbook 크기 설정
  useEffect(() => {
    const updateBookSize = () => {
      const windowWidth = window.innerWidth;
      const maxWidth = 700; // 최대 너비 제한
      const maxHeight = 500; // 최대 높이 제한

      if (windowWidth < maxWidth) {
        const newWidth = windowWidth * 0.9; // 화면 너비의 90%로 설정
        const newHeight = (newWidth / 1.397); // 비율 1.397:1에 맞춘 높이 설정
        setBookSize({ width: newWidth, height: newHeight });
      } else {
        setBookSize({ width: maxWidth, height: maxHeight });
      }
    };

    updateBookSize();
    window.addEventListener('resize', updateBookSize);

    return () => {
      window.removeEventListener('resize', updateBookSize);
    };
  }, []);

  const handlePageChange = (e) => {
    const page = parseInt(e.data);
    setCurrentPage(page + 1);
  };

  const handlePageInputChange = (e) => {
    setCurrentPage(e.target.value);
  };

  const goToPage = () => {
    const page = Math.max(1, Math.min(totalPages, parseInt(currentPage)));
    flipBookRef.current.pageFlip().flip(page - 1);
  };

  const goToPrevPage = () => {
    flipBookRef.current.pageFlip().flipPrev();
  };

  const goToNextPage = () => {
    flipBookRef.current.pageFlip().flipNext();
  };

  return (
    <div className="flipbook-container" style={{ marginTop: '100px' }}>
      <HTMLFlipBook
        width={bookSize.width} // 가로 크기에 맞게 조정된 너비
        height={bookSize.height} // 비율에 맞게 조정된 높이
        size="fixed"
        minWidth={200}
        maxWidth={700}
        minHeight={140}
        maxHeight={500}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={handlePageChange}
        ref={flipBookRef}
        className="flipbook"
        singlePage={true} // 한 페이지씩만 표시
      >
        {images.map((image, index) => (
          <div className="page" key={index}>
            <img
              src={image}
              alt={`Calendar Page ${index + 1}`}
              className="page-image"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        ))}
      </HTMLFlipBook>

      <div className="navigation">
        <button onClick={goToPrevPage} className="nav-button">◀</button>
        <div className="page-info">
          <input
            type="number"
            value={currentPage}
            onChange={handlePageInputChange}
            className="page-input"
            min={1}
            max={totalPages}
          />
          <span> / {totalPages}</span>
          <button onClick={goToPage} className="go-button">이동</button>
        </div>
        <button onClick={goToNextPage} className="nav-button">▶</button>
      </div>

      {/* Pamphlet 페이지로 이동하는 버튼 추가 (우측 하단) */}
      {/* <div className="go-to-pamphlet">
        <Link to="/pamphlet">
          <button className="nav-button">Pamphlet 페이지로 이동</button>
        </Link>
      </div> */}
    </div>
  );
};

export default Calendar;
