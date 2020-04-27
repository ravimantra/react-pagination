import React, { useState, useEffect } from 'react';

const simplePagination = ({
  pageSize,
  data,
  getCurrentPageData
}) => {
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
    <div>
      <button onClick={goToPrevious}>Prev</button>
      <span>{currentPage} of {Math.ceil(data.length / pageSize)}</span>
      <button onClick={goToNext}>Next</button>
    </div>
  );
}

export default simplePagination;