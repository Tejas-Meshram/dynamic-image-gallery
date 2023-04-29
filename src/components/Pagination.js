import React from "react";

const Pagination = ({ imagesPerPage, totalImages, images, nextPage, prevPage, handlePage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  

  return (
    <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {images.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
  );
};

export default Pagination;