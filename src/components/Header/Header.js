import Nav from "../Nav";
import "./Header.css";

const menuItems = [
  { link: "/", text: "home" },
  { link: "/battle", text: "game" },
  { link: "/gallery", text: "ALL members (ADD Yuor)" },
  { link: "/statistics", text: "statistics" },
];

export default function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Nav menuItems={menuItems} />
        </nav>
      </div>
    </header>
  );
}
