import DarkMode from "./DarkMode";
import Logo from "../resources/Logo.png";
import AvatarLogo from "../resources/Logo1.png";

function Navbar({ toggleDarkMode }) {
  return (
    <>
      <nav className="bg-gray-200 fixed top-0 w-full border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-12" alt="CyborgCoding Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="mx-5">
              <img
                id="avatarButton"
                type="button"
                data-dropdown-toggle="userDropdown"
                data-dropdown-placement="bottom-start"
                className="w-10 h-10 rounded-full cursor-pointer"
                src={AvatarLogo}
                alt="User dropdown"
              />
              {/* <!-- Dropdown menu --> */}
              <div
                id="userDropdown"
                className="z-10 hidden bg-gray-100 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-500 dark:divide-gray-500"
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>Rahul Dohare</div>
                  <div className="font-medium truncate">rahuldohare</div>
                </div>
                <div className="py-1">
                  <hr />
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Log out
                  </a>
                </div>
              </div>
            </div>
            <DarkMode toggleDarkMode={toggleDarkMode} />
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  to="/"
                  className="block py-2 px-3 md:p-0 text-white bg-red-600 rounded md:bg-transparent md:text-red-600 md:dark:text-red-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  to="/employeeList"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Employee List
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
