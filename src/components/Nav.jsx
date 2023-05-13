import { MdPerson } from 'react-icons/md';

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
          <a href="/">BOOKS</a>
          <a href="/">CATEGORIES</a>
        </li>
        <li className="icon-container">
          <a aria-label="icon" href="/categories">
            <MdPerson className="icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
