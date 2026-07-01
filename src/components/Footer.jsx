import Logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer>
      <a href="#home" onClick={scrollTo("home")} className="nav-logo flex items-center gap-2 z-50">
              <img src={Logo} alt="Genzilla logo" className="h-20 w-auto object-contain" />
            </a>
      <span className="footer-copy">© 2025 Genzilla. All Rights Reserved.</span>
      <span className="footer-copy">Mumbai · Bengaluru · Pan-India</span>
    </footer>
  )
}
