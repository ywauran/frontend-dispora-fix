import React from "react";

const Paginate = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className="flex list-none">
        <li
          onClick={previousPage}
          className="cursor-pointer px-3 py-1 border border-gray-400 rounded-l"
        >
          Prev
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={`cursor-pointer px-3 py-1 border border-gray-400 ${
              number === currentPage ? "bg-gray-800 text-white" : ""
            }`}
          >
            {number}
          </li>
        ))}
        <li
          onClick={nextPage}
          className="cursor-pointer px-3 py-1 border border-gray-400 rounded-r"
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
