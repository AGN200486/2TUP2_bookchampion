import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BookItem = ({ book }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.imageUrl} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {book.author}
          </Card.Subtitle>
          <Card.Text>
            {book.rating}
            {book.pageCount}
            {book.summary}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default BookItem;
