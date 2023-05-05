import List from './List';

export default function Books() {
  const books = [
    { id: 1, title: 'Book 1', category: 'Action' },
    { id: 2, title: 'Book 2', category: 'Romance' },
    { id: 3, title: 'Book 3', category: 'Horror' },
  ];
  return (
    <div>
      <List books={books} />
    </div>
  );
}
