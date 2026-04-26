import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 10);

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
      } ${scrolled ? styles.scrolled : ""}`}
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
            <a href="#heroSection" onClick={closeMenu}>
              Início
            </a>
            <a href="#petsSection" onClick={closeMenu}>
              Pets
            </a>
            <a href="#AboutSection" onClick={closeMenu}>
              Sobre
            </a>
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
