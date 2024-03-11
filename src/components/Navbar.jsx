import { Link } from "react-router-dom";

const Navbar = ({ toggleMenu }) => {


    const links = [
        { name: "Home", to: "/" },
        { name: "New", to: "/new" },
        { name: "Popular", to: "/popular" },
        { name: "Trending", to: "/trending" },
        { name: "Categories", to: "/categories" },
      ];

  return (
    <nav className="flex items-center justify-between px-4 lg:px-28 py-10">
        <Link to="/" className="">
            <img src="logo.svg" alt="" />
        </Link>

        {/* desktop menu */}
        
        <ul className="md:flex hidden gap-x-10">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to} className="text-black hover:text-softorange transition-colors duration-300">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <button className="md:hidden flex" onClick={toggleMenu}>
        <img src="icon-menu.svg" alt="" />
      </button>

    </nav>
  )
}

export default Navbar