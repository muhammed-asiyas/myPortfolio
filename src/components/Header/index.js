import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

const navItemList = [
  { id: 1, item: "Home", link: "/" },
  { id: 2, item: "Education", link: "/educations" },
  { id: 3, item: "Projects", link: "/projects" },
  { id: 4, item: "Certificates", link: "/certificates" },
  { id: 5, item: "Contact", link: "/contacts" },
];

const Header = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = props.location?.pathname || "/";

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark, toggleTheme } = value;

        return (
          <header
            className={`sticky top-0 z-50 w-full backdrop-blur-xl transition-colors duration-300 ${
              isDark
                ? "bg-[#0a0f1d]/80 border-b border-slate-800/80 text-white"
                : "bg-white/80 border-b border-slate-200/80 text-slate-800"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 sm:h-20">
                {/* Brand Logo */}
                <Link
                  to="/"
                  className="flex items-center gap-2 group font-bold tracking-tight text-xl sm:text-2xl transition-all duration-300"
                >
                  <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
                    A
                  </span>
                  <span className="font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Asiyas
                  </span>
                  <span className="text-indigo-500 text-2xl font-black leading-none -ml-1.5">.</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/80 bg-slate-100/70 dark:bg-slate-900/60 backdrop-blur-md">
                  {navItemList.map((item) => {
                    const isActive = currentPath === item.link;
                    return (
                      <Link
                        key={item.id}
                        to={item.link}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 font-semibold"
                            : isDark
                            ? "text-slate-300 hover:text-white hover:bg-slate-800/60"
                            : "text-slate-600 hover:text-slate-900 hover:bg-white"
                        }`}
                      >
                        {item.item}
                      </Link>
                    );
                  })}
                </nav>

                {/* Right controls: Theme Toggle + Mobile Menu Button */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label="Toggle Theme"
                    className={`p-2.5 rounded-xl border transition-all duration-300 hover:scale-105 active:scale-95 ${
                      isDark
                        ? "bg-slate-900/90 border-slate-800 text-amber-400 hover:bg-slate-800 hover:border-slate-700 shadow-inner"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-sm"
                    }`}
                  >
                    {isDark ? <Sun size={20} className="stroke-[2.2]" /> : <Moon size={20} className="stroke-[2.2]" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Open Navigation Menu"
                    className={`md:hidden p-2.5 rounded-xl border transition-all duration-200 ${
                      isDark
                        ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Dropdown Navigation */}
            {mobileMenuOpen && (
              <div
                className={`md:hidden px-4 pt-2 pb-6 border-b transition-all duration-300 ${
                  isDark
                    ? "bg-[#0a0f1d]/95 border-slate-800 text-white"
                    : "bg-white/95 border-slate-200 text-slate-900"
                }`}
              >
                <div className="flex flex-col gap-2 pt-2">
                  {navItemList.map((item) => {
                    const isActive = currentPath === item.link;
                    return (
                      <Link
                        key={item.id}
                        to={item.link}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md shadow-indigo-500/25"
                            : isDark
                            ? "text-slate-300 hover:bg-slate-800/80"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {item.item}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </header>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default withRouter(Header);
