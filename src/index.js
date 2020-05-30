import React, { useState, useEffect } from 'react'

export const SimplePagination = ({
  pageSize = 1,
  data = [],
  getCurrentPageData = [],
  containerClass = '',
  prevButton = '',
  nextButton = '',
  pageNumberText = ''
}) => {
  const totalPages = Math.ceil(data.length / pageSize);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    loadPageData(1);
  }, [data])

  const goToNext = () => {
    const page = Math.min(currentPage + 1, totalPages);
    loadPageData(page);
  }

  const goToPrevious = () => {
    const page = Math.max(1, currentPage - 1);
    loadPageData(page);
  }

  const sendCurrentPageData = (data, page) => data.slice((page - 1) * pageSize, page * pageSize);

  const loadPageData = (page) => {
    setCurrentPage(page);
    getCurrentPageData(sendCurrentPageData(data, page));
  }

  return (
    <div className={containerClass}>
      <button
        onClick={goToPrevious}
        disabled={currentPage === 1}
        className={prevButton}
      >
        Prev
      </button>
      <span className={pageNumberText}>{currentPage} of {Math.ceil(data.length / pageSize)}</span>
      <button
        onClick={goToNext}
        disabled={currentPage === totalPages}
        className={nextButton}
      >
        Next
      </button>
    </div>
  );
}

export default SimplePagination;
