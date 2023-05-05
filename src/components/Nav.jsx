import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <h1>BookStore CMS</h1>
      <ul>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="categories">CATEGORIES</Link>
        </li>
      </ul>
    </div>
  );
}
