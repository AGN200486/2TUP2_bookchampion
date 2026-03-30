import BookItem from "./bookitems/BookItem";

function Books({ books }) {
  return (
    <>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </>
  );
}

export default Books;
