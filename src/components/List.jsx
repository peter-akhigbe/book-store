import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const List = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <h2>Books</h2>
      <ul className="bookDisplay">
        {books.map((book) => (
          <div key={book.item_id}>
            <li>{book.item_id}</li>
            <li>{book.title}</li>
            <li>{book.author}</li>
            <li>{book.category || 'Movie'}</li>
            <button
              type="button"
              onClick={() => handleRemoveBook(book.item_id)}
            >
              Remove Book
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
