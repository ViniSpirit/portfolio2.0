import Link from "next/link";

import styles from "../styles/menu.module.css";

function Menu({ setMenu }) {
  return (
    <nav className={styles.menuContainer}>
      <div>
        <a
          href="https://www.linkedin.com/in/marcos-vinicius-75863a74/"
          target="_blank"
        >
          <i className="fab fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/ViniSpirit" target="_blank">
          <i className="fab fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.facebook.com/marcos.vinicius.54390/"
          target="_blank"
        >
          <i className="fab fa-facebook" aria-hidden="true"></i>
        </a>
      </div>
      <ul>
        <Link href="#home">
          <a onClick={() => setMenu(false)}>Início</a>
        </Link>
        <Link href="#about">
          <a onClick={() => setMenu(false)}>Sobre</a>
        </Link>
        <Link href="#skills">
          <a onClick={() => setMenu(false)}>Habilidades</a>
        </Link>
        <Link href="#projects">
          <a onClick={() => setMenu(false)}>Projetos</a>
        </Link>
        <Link href="#contact">
          <a onClick={() => setMenu(false)}>Contato</a>
        </Link>
      </ul>
      <button onClick={() => setMenu(false)}>X</button>
    </nav>
  );
}

export default Menu;
