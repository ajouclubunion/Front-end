import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './App.css';

const images = Array.from({ length: 76 }, (_, i) => `/images/pamphlet_${i + 1}.jpg`);

function FlipBook() {
  const flipBookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [inputPage, setInputPage] = useState('1');
  const [isMobile, setIsMobile] = useState(false);
  const totalPages = images.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px 이하일 경우 모바일로 간주
    };

    handleResize(); // 초기 렌더링 시에도 호출
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const handlePrevPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const onPageChange = (e) => {
    const newPage = e.data; // 페이지 인덱스는 0부터 시작
    setCurrentPage(newPage);
    setInputPage((newPage + 1).toString()); // 페이지 번호를 1부터 시작하도록 표시
  };

  const handlePageInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handlePageInputSubmit = (e) => {
    e.preventDefault();
    const pageNum = parseInt(inputPage, 10);
    if (!isNaN(pageNum) && pageNum > 0 && pageNum <= totalPages) {
      if (flipBookRef.current) {
        flipBookRef.current.pageFlip().turnToPage(pageNum - 1);
        setCurrentPage(pageNum - 1);
      }
    } else {
      alert(`Please enter a number between 1 and ${totalPages}`);
      setInputPage((currentPage + 1).toString());
    }
  };

  return (
    <div className="book-container">
      <HTMLFlipBook
        width={isMobile ? 300 : 400}
        height={isMobile ? 450 : 600}
        showCover={true}
        ref={flipBookRef}
        onFlip={onPageChange}
        disableFlipByClick
        display={isMobile ? 'single' : 'double'} // 모바일에서는 single로 표시
      >
        {images.map((image, index) => (
          <div key={index} className="demoPage">
            <img src={image} alt={`page-${index + 1}`} />
          </div>
        ))}
      </HTMLFlipBook>

      <div className="bottom-bar">
        <div className="bottom-bar-left" onClick={handlePrevPage}>
          &lt;
        </div>
        <div className="bottom-bar-right" onClick={handleNextPage}>
          &gt;
        </div>
      </div>

      <div className="page-controls">
        <form onSubmit={handlePageInputSubmit}>
          <label>
            Page: 
            <input
              type="text"
              value={inputPage}
              onChange={handlePageInputChange}
              className="page-input"
            />
            / {totalPages}
          </label>
          <button type="submit" className="go-button">Go</button>
        </form>
      </div>
    </div>
  );
}

export default FlipBook;



// const images = [
//   '/images/pamphlet_1.jpg',
//   '/images/pamphlet_2.jpg',
//   '/images/pamphlet_3.jpg',
//   '/images/pamphlet_4.jpg',
//   '/images/pamphlet_5.jpg',
//   '/images/pamphlet_6.jpg',
//   '/images/pamphlet_7.jpg',
//   '/images/pamphlet_8.jpg',
//   '/images/pamphlet_9.jpg',
//   '/images/pamphlet_10.jpg',
//   '/images/pamphlet_11.jpg',
//   '/images/pamphlet_12.jpg',
//   '/images/pamphlet_13.jpg',
//   '/images/pamphlet_14.jpg',
//   '/images/pamphlet_15.jpg',
//   '/images/pamphlet_16.jpg',
//   '/images/pamphlet_17.jpg',
//   '/images/pamphlet_18.jpg',
//   '/images/pamphlet_19.jpg',
//   '/images/pamphlet_20.jpg',
//   '/images/pamphlet_21.jpg',
//   '/images/pamphlet_22.jpg',
//   '/images/pamphlet_23.jpg',
//   '/images/pamphlet_24.jpg',
//   '/images/pamphlet_25.jpg',
//   '/images/pamphlet_26.jpg',
//   '/images/pamphlet_27.jpg',
//   '/images/pamphlet_28.jpg',
//   '/images/pamphlet_29.jpg',
//   '/images/pamphlet_30.jpg',
//   '/images/pamphlet_31.jpg',
//   '/images/pamphlet_32.jpg',
//   '/images/pamphlet_33.jpg',
//   '/images/pamphlet_34.jpg',
//   '/images/pamphlet_35.jpg',
//   '/images/pamphlet_36.jpg',
//   '/images/pamphlet_37.jpg',
//   '/images/pamphlet_38.jpg',
//   '/images/pamphlet_39.jpg',
//   '/images/pamphlet_40.jpg',
//   '/images/pamphlet_41.jpg',
//   '/images/pamphlet_42.jpg',
//   '/images/pamphlet_43.jpg',
//   '/images/pamphlet_44.jpg',
//   '/images/pamphlet_45.jpg',
//   '/images/pamphlet_46.jpg',
//   '/images/pamphlet_47.jpg',
//   '/images/pamphlet_48.jpg',
//   '/images/pamphlet_49.jpg',
//   '/images/pamphlet_50.jpg',
//   '/images/pamphlet_51.jpg',
//   '/images/pamphlet_52.jpg',
//   '/images/pamphlet_53.jpg',
//   '/images/pamphlet_54.jpg',
//   '/images/pamphlet_55.jpg',
//   '/images/pamphlet_56.jpg',
//   '/images/pamphlet_57.jpg',
//   '/images/pamphlet_58.jpg',
//   '/images/pamphlet_59.jpg',
//   '/images/pamphlet_60.jpg',
//   '/images/pamphlet_61.jpg',
//   '/images/pamphlet_62.jpg',
//   '/images/pamphlet_63.jpg',
//   '/images/pamphlet_64.jpg',
//   '/images/pamphlet_65.jpg',
//   '/images/pamphlet_66.jpg',
//   '/images/pamphlet_67.jpg',
//   '/images/pamphlet_68.jpg',
//   '/images/pamphlet_69.jpg',
//   '/images/pamphlet_70.jpg',
//   '/images/pamphlet_71.jpg',
//   '/images/pamphlet_72.jpg',
//   '/images/pamphlet_73.jpg',
//   '/images/pamphlet_74.jpg',
//   '/images/pamphlet_75.jpg',
//   '/images/pamphlet_76.jpg',
// ];