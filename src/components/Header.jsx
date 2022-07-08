import { Logo } from "./Logo";
import { NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";

// flex justify-between py-5 px-40 items-center flex-wrap bg-blue-500 min-w-full

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className="flex bg-blue-500 py-5 px-24 items-center justify-between">
        <NavLink to="/">
          <Logo />
        </NavLink>

        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-red-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] ease-in-out text-blue-500 font-bold">
              <NavLink
                to="/"
                className=" my-8 uppercase"
                activeClassName="active"
                onClick={() => setIsNavOpen(false)}
              >
                HOME
              </NavLink>
              <NavLink
                to="/sobre"
                className=" my-8 uppercase "
                activeClassName="active"
                onClick={() => setIsNavOpen(false)}
              >
                SOBRE
              </NavLink>
              <NavLink
                to="/atendimento"
                className=" my-8 uppercase"
                activeClassName="active"
                onClick={() => setIsNavOpen(false)}
              >
                atendimento
              </NavLink>
              <NavLink
                to="/contato"
                className="my-8 uppercase"
                activeClassName="active"
                onClick={() => setIsNavOpen(false)}
              >
                localização
              </NavLink>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden list-none flex-wrap gap-x-3 text-gray-200 font-bold lg:flex">
          <NavLink
            to="/"
            className="hover:text-yellow-200 transition-colors"
            activeClassName="active"
          >
            HOME
          </NavLink>
          <NavLink
            to="/sobre"
            className="hover:text-yellow-200 transition-colors"
            activeClassName="active"
          >
            SOBRE
          </NavLink>
          <NavLink
            to="/atendimento"
            className="hover:text-yellow-200 transition-colors"
            activeClassName="active"
          >
            ATENDIMENTO
          </NavLink>
          <NavLink
            to="/contato"
            className="hover:text-yellow-200 transition-colors"
            activeClassName="active"
          >
            LOCALIZAÇÃO
          </NavLink>
        </ul>
      </header>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 70%;
        height: 100vh;
        top: 0;
        right: 0;
        background: white;
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transition: 1 ease-in-out;
        box-shadow: -2px 0 20px 5px rgba(0, 0, 0, 0.5);
      }
    `}</style>
    </>
  );
}
