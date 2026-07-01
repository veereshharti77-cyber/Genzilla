import { useState } from "react";
import Logo from "../assets/logo.png";
const links = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Smooth scroll to section
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    setOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Open WhatsApp
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/919008824184?text=Hi%20I'm%20interested%20in%20your%20services.",
      "_blank"
    );
  };

  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo */}
      <a href="#home" onClick={scrollTo("home")} className="nav-logo flex  gap-2 z-50">
        <img src={Logo} alt="Genzilla logo" className="h-12 w-auto object-contain" />
      </a>

      {/* Desktop Navigation */}
      <ul className="nav-links hidden sm:flex items-center gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={scrollTo(link.href.substring(1))}
              className="hover:text-green-500 transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="nav-btn hidden sm:inline-block"
      >
        Let's Talk
      </button>

      {/* Mobile Hamburger */}
      <button
        className="sm:hidden  flex flex-col justify-center items-end gap-[5px] w-8 h-8"
        aria-label="Toggle Menu"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`block h-[2px] bg-green transition-all duration-300 ${
            open ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
          }`}
        ></span>

        <span
          className={`block h-[2px] bg-green transition-all duration-300 ${
            open ? "opacity-0" : "w-4"
          }`}
        ></span>

        <span
          className={`block h-[2px] bg-green transition-all duration-300 ${
            open ? "w-6 -rotate-45 -translate-y-[7px]" : "w-5"
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden fixed top-16 left-0 w-full text-white bg-black shadow-lg z-50 flex flex-col gap-5 px-6 py-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={scrollTo(link.href.substring(1))}
              className="text-gray-800 uppercase text-sm font-medium"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={openWhatsApp}
            className="nav-btn w-full text-center"
          >
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
}