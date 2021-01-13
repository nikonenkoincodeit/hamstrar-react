import Nav from '../Nav';
import './Header.css';

const menuItems = [
  { link: '/', text: 'home' },
  { link: '/about', text: 'about' },
  { link: '/contacts', text: 'contacts' },
  { link: '/blog', text: 'blog' },
  { link: '/users', text: 'users' },
];

export default function Header(props) {
  return (
    <header className="header">
      <div className="content">
        <Nav menuItems={menuItems} />
      </div>
    </header>
  );
}
