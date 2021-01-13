import { Link } from 'react-router-dom';

import './Nav.css';
export default function Nav({ menuItems }) {
  const menu = menuItems.map(({ link, text }) => (
    <li className="item" key={link}>
      <Link to={link}>{text}</Link>
    </li>
  ));
  return <ul className="list-items">{menu}</ul>;
}
