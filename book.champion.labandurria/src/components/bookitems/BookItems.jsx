import React from "react";

const BookItems = ({ title }, { author }) => {
  return (
    <>
      <div>BookItems</div>
      <p>
        {" "}
        Titulo del libro: {title} Autor: {author}
      </p>
    </>
  );
};

export default BookItems;
