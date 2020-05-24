import React, { useState, useEffect } from 'react'

export const SimplePagination = ({
  pageSize,
  data,
  getCurrentPageData
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
    <div>
      <button onClick={goToPrevious} disabled={currentPage === 1}>Prev</button>
      <span>{currentPage} of {Math.ceil(data.length / pageSize)}</span>
      <button onClick={goToNext} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
}
