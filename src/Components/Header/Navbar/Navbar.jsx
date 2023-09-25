import { Link, NavLink, useLocation,  } from "react-router-dom";


const Navbar = () => {
  const navigation = useLocation()

    return (
      <div className="">
        <div
          className={`${
            navigation.pathname == "/" && "absolute z-10"
          } h-20 navbar`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link to="/">Home</Link>
                <Link to="/donation">Donation</Link>
                <Link to="/statistics">Statistics</Link>
              </ul>
            </div>
            <Link to='/' className="p-2 rounded-lg text-2xl duration-500 text-black hover:bg-black hover:text-white">Donation</Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5 mr-5">
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "p-2 rounded-lg bg-black text-white font-semibold h-10 duration-300"
                    : isPending
                    ? "p btn"
                    : "p-2 rounded-lg duration-500 hover:bg-gray-400 hover:text-white hover:font-semibold hover:p-4"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "p-2 rounded-lg bg-black text-white font-semibold h-10 duration-300 dark:bg-cyan-500"
                    : isPending
                    ? "p btn"
                    : "p-2 rounded-lg duration-500 hover:bg-gray-800 hover:text-white hover:font-semibold hover:p-4"
                }
                to="/donation"
              >
                Donation
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "p-2 rounded-lg bg-black text-white font-semibold h-10 duration-300 dark:bg-cyan-500"
                    : isPending
                    ? "p btn"
                    : "p-2 rounded-lg duration-500 hover:bg-gray-800 hover:text-white hover:font-semibold hover:p-4 "
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;