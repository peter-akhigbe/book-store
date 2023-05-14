import { MdPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Nav() {
  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    link.addEventListener('click', () => link.classList.add('active-link'));
  });

  return (
    <nav className="nav">
      <ul>
        <li className="logo">
          <h1>Bookstore CMS</h1>
          <Link to="/">BOOKS</Link>
          <Link to="/categories">CATEGORIES</Link>
        </li>
        <li className="icon-container">
          <Link aria-label="icon" to="/">
            <MdPerson className="icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
