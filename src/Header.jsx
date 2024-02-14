import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="bg-header text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Logo placeholder */}
        {/* <img
          src="https://placekitten.com/40/40" // Placeholder logo image
          alt="Logo"
          className="mr-2 rounded-full"
        /> */}
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
          />
        </svg>
        <Link to="/" className="hover:underline">
          <span className="font-medium text-3xl">Comfort Corner</span>
        </Link>
      </div>

      {/* Navigation links with cart and profile icons */}
      <div className="flex items-center space-x-6">
        <Link to="/cart" className="hover:underline flex items-center">
          <svg
            class="w-7 h-7 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
            />
          </svg>
        </Link>
        <Link to="/login" className="hover:underline flex items-center">
          <svg
            class="w-7 h-7 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <h2 className="m-2">{props.name ? `${props.name}` : "Login"}</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
