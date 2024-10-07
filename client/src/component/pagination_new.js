import React from 'react';
import { Pagination } from 'react-bootstrap';
const PaginationNew = ({ currentPage, totalPages, onPageChange }) => {
    const pageItems = [];
  for (let number = 1; number <= totalPages; number++) {
    pageItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.First onClick={() => onPageChange(1)} />
      <Pagination.Prev
        onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
      />

      {pageItems}

      <Pagination.Next
        onClick={() =>
          onPageChange(currentPage < totalPages ? currentPage + 1 : totalPages)
        }
      />
      <Pagination.Last onClick={() => onPageChange(totalPages)} />
    </Pagination>
  );
}

export default PaginationNew;
