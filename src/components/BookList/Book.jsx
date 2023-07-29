import React from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';

const Book = (book) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className="book-item-img">
        <img src= {book.cover_Img} alt="cover" />
      </div>
      <div className="book-item-info text-center">
        <Link to={`/book/${book.id}`} {...book}></Link>
      </div>
    </div>
  )
}

export default Book