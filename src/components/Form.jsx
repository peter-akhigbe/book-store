import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      const newBook = {
        title,
        author,
        item_id: `item${books.length + 1}`,
      };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit} className="submit">
        <input
          type="text"
          className="title"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="author"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="addBook">
          Add Book
        </button>
      </form>
    </>
  );
};

export default Form;
