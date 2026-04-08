import React from 'react';
import BookItem from '../bookitems/BookItem';

const Books = ({ books, onDeleteBook}) => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {books.map((book) => (
                <BookItem
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    rating={book.rating}
                    pageCount={book.pageCount}
                    imageUrl={book.imageUrl}
                    available={book.available}
                    onDelete={onDeleteBook} // Pasamos la función
                />
            ))}
        </div>
    );
};

export default Books;