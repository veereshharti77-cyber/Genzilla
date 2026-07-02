import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-6">
      
      <a
        href="#home"
        onClick={scrollTo("home")}
        className="nav-logo flex justify-center md:justify-start w-full md:w-auto"
      >
        <img
          src={Logo}
          alt="Genzilla logo"
          className="h-20 w-auto object-contain"
        />
      </a>

      <span className="footer-copy text-center">
        © 2025 Genzilla. All Rights Reserved.
      </span>

      <span className="footer-copy text-center">
        Mumbai · Bengaluru · Pan-India
      </span>

    </footer>
  );
}