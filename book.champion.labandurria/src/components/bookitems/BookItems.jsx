import React from "react";

const BookItems = ({book}) => {
  return (
    <>
      <div>BookItems</div>
        <h2>Title: {book.title}</h2>
        <p>Rating: {book.rating}</p>
        <p>Paginas: {book.pageCount}</p>
        <img src={book.imageUrl} alt={book.title} width="200"/>
        <p>{book.summary}</p> 
    </>
  );
};

export default BookItems;
