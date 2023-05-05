import PropTypes from 'prop-types';

export default function List({ books }) {
  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>{book.title}</div>
            <div>{book.category}</div>
            <button type="button">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

List.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
