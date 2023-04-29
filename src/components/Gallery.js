import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import Filters from './Filters';
import Images from './Images';
import Pagination from './Pagination';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const defaultTag = "flowers";
const perPage = 20;

const Gallery = () => {
  const [query, setQuery] = useState(defaultTag);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`);
      setImages(response.data.photos.photo);
      setTotalPages(response.data.photos.pages);
    }

    getImages();
  }, [query, page]);

  const handleSearch = (value) => {
    setQuery(value);
    setPage(1);
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > images.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = images.length - 1
      }
      return prevPage
    })
  }

  const handlePage = (index) => {
    setPage(index)
  }


  return (
    <div className="gallery-container">
      <h1 className='header'>Dynamic Image Gallery</h1>
      <Search onSearch={handleSearch} />
      <Filters onSearch={handleSearch} />
      <Images images={images} />
      <Pagination images={images} totalPages={totalPages} handlePage={handlePage} prevPage={prevPage} nextPage={nextPage}/>
    </div>
  );
}

export default Gallery;