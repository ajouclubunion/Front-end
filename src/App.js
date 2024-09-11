import React, { useState, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './App.css';

const App = () => {
  const images = Array.from({ length: 76 }, (_, i) => `/images/pamphlet_${i + 1}.jpg`);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = images.length;

  const flipBookRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // 윈도우 크기 변경 감지 (모바일/웹 구분)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 페이지 변경 핸들러
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

  // 이전 페이지로 이동하는 함수 (모바일)
  const goToPrevPageMobile = () => {
    flipBookRef.current.pageFlip().flipPrev();
  };

  // 다음 페이지로 이동하는 함수 (모바일)
  const goToNextPageMobile = () => {
    flipBookRef.current.pageFlip().flipNext();
  };

  return (
    <div className="flipbook-container">
      <HTMLFlipBook
        width={isMobile ? 300 : 250} // 모바일 크기는 유지하고, 웹 크기를 줄임
        height={isMobile ? 424 : 354} // 웹 크기 비율에 맞게 줄임
        size="stretch"
        minWidth={200}
        maxWidth={500}
        minHeight={250}
        maxHeight={800}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={handlePageChange}
        ref={flipBookRef}
        className="flipbook"
        singlePage={isMobile} // 모바일에서는 single page 모드 활성화
      >
        {images.map((image, index) => (
          <div className="page" key={index}>
            <img src={image} alt={`Pamphlet Page ${index + 1}`} className="page-image" />
          </div>
        ))}
      </HTMLFlipBook>

      {isMobile && (
        <div className="navigation">
          {/* 모바일에서만 양쪽 이동 버튼 표시 */}
          <button onTouchStart={goToPrevPageMobile} className="nav-button">◀</button>
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
          <button onTouchStart={goToNextPageMobile} className="nav-button">▶</button>
        </div>
      )}

      {!isMobile && (
        <div className="page-info">
          {/* 웹에서는 페이지 입력 및 이동 버튼만 표시 */}
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
      )}
    </div>
  );
};

export default App;
