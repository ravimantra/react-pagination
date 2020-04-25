import React, { useState } from 'react';

const simplePagination = ({
  pageSize,
  data,
  goToNext,
  goToPrevious
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([])
  goToNext = () => {
    const page = Math.min(currentPage + 1, totalPages);
    loadPageData(page);
  }

  goToPrevious = () => {
    const page = Math.max(1, currentPage - 1);
    loadPageData(page);
  }

  const getCurrentPageData = (data, page) => data.slice((page - 1) * pageSize, page * pageSize);

  const loadPageData = (page) => {
    setCurrentPage(page);
    setCurrentPageData(getCurrentPageData(data, page));
  }
  return currentPageData;
}

export default simplePagination