import React, { useState, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './App.css';

const Pamphlet = () => {
  const images = Array.from({ length: 76 }, (_, i) => `/images/pamphlet_${i + 1}.jpg`);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = images.length;

  const flipBookRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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

  const goToPrevPageMobile = () => {
    flipBookRef.current.pageFlip().flipPrev();
  };

  const goToNextPageMobile = () => {
    flipBookRef.current.pageFlip().flipNext();
  };

  return (
    <div className="flipbook-container">
      <HTMLFlipBook
        width={isMobile ? 300 : 250}
        height={isMobile ? 424 : 354}
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
        singlePage={isMobile}
      >
        {images.map((image, index) => (
          <div className="page" key={index}>
            <img src={image} alt={`Pamphlet Page ${index + 1}`} className="page-image" />
          </div>
        ))}
      </HTMLFlipBook>

      {isMobile && (
        <div className="navigation">
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

      {/* Calendar 페이지로 이동하는 버튼 추가 (우측 하단) */}
      {/* <div className="go-to-calendar">
        <Link to="/calendar">
          <button className="nav-button">Calendar 페이지로 이동</button>
        </Link>
      </div> */}
    </div>
  );
};

export default Pamphlet;
