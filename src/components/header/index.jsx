import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import styles from "./Header.module.css";

export default function Header({ isPetDetailsRoute = false, hasHero = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [visible, setVisible] = useState(true);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const atTop = current <= 10;

      setIsAtTop(atTop);
      setVisible(current < 50 || current < lastScrollRef.current);

      lastScrollRef.current = current;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.siteHeader} ${
        visible ? styles.show : styles.hide
      } ${isPetDetailsRoute ? styles.hiddenOnMobile : ""} ${
        hasHero && isAtTop ? styles.transparent : styles.scrolled
      }`}
    >
      <figure className={styles.logo}>
        <h1>OngPet</h1>
      </figure>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        onClick={closeMenu}
      >
        <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
          <nav className={styles.nav}>
            <Link to="/" onClick={closeMenu}>
              Início
            </Link>
            <Link to="/pets" onClick={closeMenu}>
              Pets
            </Link>
            <Link to="/#aboutSection" onClick={closeMenu}>
              Sobre
            </Link>
            <a href="#contactSection" onClick={closeMenu}>
              Contato
            </a>
          </nav>
        </div>
      </div>

      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  );
}
