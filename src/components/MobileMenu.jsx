
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileMenu = ({toggleMenu, menuOpen}) => {

    const links = [
        { name: "Home", to: "/" },
        { name: "New", to: "/new" },
        { name: "Popular", to: "/popular" },
        { name: "Trending", to: "/trending" },
        { name: "Categories", to: "/categories" },
      ];


      
  return (
    <>

      {/* mobile menu */}

      {menuOpen && (
        <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: .5 }}
         className="md:hidden w-full max-w-[70%] min-h-screen absolute right-0 top-0 flex flex-col z-10
        bg-offwhite px-5 py-10 gap-y-24">
            <button onClick={toggleMenu}
            className="ml-auto">
                <img src="icon-menu-close.svg" alt="" />
            </button>
          <ul className="flex flex-col gap-y-6 ">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.to} className="text-darkgrayish">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  )
}

export default MobileMenu