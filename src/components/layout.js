import Menu from "./menu";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

import styles from "../styles/layout.module.css";

function Layout({
  children,
  homeRef,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
}) {
  const [menu, setMenu] = useState(false);

  const [faded, setFaded] = useState(false);

  const [activeHome, setActiveHome] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeSkills, setActiveSkills] = useState(false);
  const [activeProjects, setActiveProjects] = useState(false);
  const [activeContact, setActiveContact] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollCatch);
    const home = homeRef;
    const about = aboutRef;
    const skills = skillsRef;
    const projects = projectsRef;
    const contact = contactRef;

    function scrollCatch() {
      if (scrollY >= 130) {
        setFaded(true);
      } else {
        setFaded(false);
      }

      if (
        scrollY >= home.current.offsetTop &&
        scrollY < about.current.offsetTop
      ) {
        setActiveHome(true);
        console.log("home");
      } else {
        setActiveHome(false);
      }

      if (
        scrollY >= about.current.offsetTop &&
        scrollY < skills.current.offsetTop - 10
      ) {
        setActiveAbout(true);
        console.log("about");
      } else {
        setActiveAbout(false);
      }

      if (
        scrollY >= skills.current.offsetTop - 10 &&
        scrollY < projects.current.offsetTop - 10
      ) {
        setActiveSkills(true);
        console.log("skills");
      } else {
        setActiveSkills(false);
      }

      if (
        scrollY >= projects.current.offsetTop - 10 &&
        scrollY < contact.current.offsetTop - 30
      ) {
        setActiveProjects(true);
        console.log("projects");
      } else {
        setActiveProjects(false);
      }
      if (scrollY >= contact.current.offsetTop - 30) {
        setActiveContact(true);
        console.log("contact");
      } else {
        setActiveContact(false);
      }
    }

    return () => window.removeEventListener("scroll", scrollCatch);
  }, []);

  function homeScroll() {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function aboutScroll() {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function skillsScroll() {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function projectsScroll() {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function contactScroll() {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>{"Marcos Vinicius | Portfólio"}</title>
      </Head>
      {menu && <Menu setMenu={setMenu} />}
      <header className={faded ? styles.headerFaded : ""}>
        <nav>
          <ul>
            <li>
              <a
                onClick={homeScroll}
                className={activeHome ? styles.active : ""}
              >
                Início
              </a>
            </li>
            <li>
              <a
                onClick={aboutScroll}
                className={activeAbout ? styles.active : ""}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                onClick={skillsScroll}
                className={activeSkills ? styles.active : ""}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                onClick={projectsScroll}
                className={activeProjects ? styles.active : ""}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                onClick={contactScroll}
                className={activeContact ? styles.active : ""}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={() => setMenu(true)}>
          <Image src="/images/menu.png" width={20} height={15} />
        </button>
      </header>

      {children}
      <footer>
        <div>
          <div className={styles.sobre}>
            <div>Sobre</div>
            <p>
              Projeto desenvolvido em
              <br /> React.js, Next.js, CSS.
            </p>
            <p>© Marcos Vinicius 2021</p>
          </div>
          <div className={styles.nav}>
            <div>Navegue</div>
            <a onClick={homeScroll}>Início</a>
            <a onClick={aboutScroll}>Sobre</a>
            <a onClick={skillsScroll}>Habilidades</a>
            <a onClick={projectsScroll}>Projetos</a>
            <a onClick={contactScroll}>Contato</a>
          </div>
          <div className={styles.follow}>
            <div>Links</div>
            <div className={styles.links}>
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
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
