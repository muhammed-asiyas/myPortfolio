import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import { Sun, Moon, Menu, X, Coffee } from "lucide-react";

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
            className={`sticky top-0 z-50 w-full backdrop-blur-xl transition-all duration-300 ${
              isDark
                ? "bg-[#140a07]/80 border-b border-amber-900/30 text-[#fffaf5]"
                : "bg-[#fcf6ee]/85 border-b border-amber-800/10 text-[#2b150c]"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 sm:h-20">
                {/* Brand Logo with Kopiko Coffee Bean & Water Droplet Motif */}
                <Link
                  to="/"
                  className="flex items-center gap-3 group tracking-tight text-xl sm:text-2xl transition-all duration-300"
                >
                  <div className="relative">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-600 via-orange-600 to-amber-900 flex items-center justify-center text-white shadow-lg shadow-amber-900/30 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 border border-amber-400/30">
                      <Coffee size={20} className="stroke-[2.2]" />
                    </span>
                    {/* Natural Dewdrop Glisten Accent */}
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-200 to-white shadow-sm shadow-amber-400/50 animate-pulse border border-white/80 flex items-center justify-center" />
                  </div>

                  <div className="flex flex-col">
                    <span className="font-extrabold tracking-tight text-lg sm:text-xl font-display flex items-center gap-1">
                      <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-600 bg-clip-text text-transparent">
                        Asiyas
                      </span>
                      <span className="text-amber-500 text-2xl font-black leading-none">.</span>
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600/80 dark:text-amber-400/70 -mt-1">
                      Full Stack Dev
                    </span>
                  </div>
                </Link>

                {/* Desktop Navigation with Smooth Pill Alignment */}
                <nav
                  className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-md transition-colors ${
                    isDark
                      ? "border-amber-900/40 bg-[#1c0f0a]/70 shadow-inner"
                      : "border-amber-900/10 bg-white/70 shadow-sm"
                  }`}
                >
                  {navItemList.map((item) => {
                    const isActive = currentPath === item.link;
                    return (
                      <Link
                        key={item.id}
                        to={item.link}
                        className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white shadow-md shadow-amber-900/30"
                            : isDark
                            ? "text-[#d1baa7] hover:text-white hover:bg-amber-900/25"
                            : "text-[#5e3b26] hover:text-[#2b150c] hover:bg-amber-100/60"
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
                    className={`relative p-2.5 rounded-2xl border transition-all duration-300 hover:scale-105 active:scale-95 group overflow-hidden ${
                      isDark
                        ? "bg-[#1c0f0a]/90 border-amber-900/50 text-amber-400 hover:border-amber-500/50 shadow-md shadow-black/40"
                        : "bg-white/90 border-amber-900/15 text-amber-800 hover:border-amber-600/40 shadow-sm"
                    }`}
                  >
                    {/* Subtle water sheen reflection on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    {isDark ? (
                      <Sun size={20} className="stroke-[2.2] text-amber-400 animate-spin-slow" />
                    ) : (
                      <Moon size={20} className="stroke-[2.2] text-amber-900" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Open Navigation Menu"
                    className={`md:hidden p-2.5 rounded-2xl border transition-all duration-200 ${
                      isDark
                        ? "bg-[#1c0f0a] border-amber-900/50 text-amber-300 hover:bg-amber-950/60"
                        : "bg-white border-amber-900/15 text-amber-900 hover:bg-amber-50"
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
                className={`md:hidden px-4 pt-3 pb-6 border-b transition-all duration-300 backdrop-blur-xl ${
                  isDark
                    ? "bg-[#140a07]/95 border-amber-900/30 text-white"
                    : "bg-[#fcf6ee]/95 border-amber-900/10 text-[#2b150c]"
                }`}
              >
                <div className="flex flex-col gap-2">
                  {navItemList.map((item) => {
                    const isActive = currentPath === item.link;
                    return (
                      <Link
                        key={item.id}
                        to={item.link}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white shadow-md shadow-amber-900/30"
                            : isDark
                            ? "text-[#d1baa7] hover:bg-amber-900/25"
                            : "text-[#5e3b26] hover:bg-amber-100/60"
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
