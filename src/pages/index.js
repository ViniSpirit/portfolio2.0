import { useRef } from "react";

import Layout from "../components/layout";
import Card1 from "../components/card1";
import Card2 from "../components/card2";
import Form from "../components/form";
import Projects from "../components/projects";

import stylesH from "../styles/home.module.css";
import stylesA from "../styles/about.module.css";
import stylesS from "../styles/skills.module.css";
import stylesP from "../styles/projects.module.css";
import stylesC from "../styles/contact.module.css";

import getAge from "../utils/age";

export default function Home() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <Layout
      aboutRef={aboutRef}
      homeRef={homeRef}
      skillsRef={skillsRef}
      projectsRef={projectsRef}
      contactRef={contactRef}
    >
      {/* Home section */}

      <section ref={homeRef} id="home" className={stylesH.homeContainer}>
        <div>
          <div className={stylesH.text1}>Marcos Vinicius</div>

          <div className={stylesH.text2}>
            Aplicações web modernas e responsivas.
          </div>
        </div>
        {/* <div className={stylesH.swipe}>
          <a
            onClick={() =>
              aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <i className="fas fa-arrow-down" aria-hidden="true"></i> Scroll
          </a>
        </div> */}
        <div className={stylesH.follow}>
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
      </section>

      {/* About Section */}

      <section ref={aboutRef} id="about" className={stylesA.aboutContainer}>
        <div>
          <h1>Sobre mim</h1>
          <div className={stylesA.aboutContent}>
            <img src="/images/profile.jpg" alt="" />
            <div>
              <div className={stylesA.aboutDescription}>
                <div>
                  <h2>Desenvolvedor Web</h2>
                </div>
                <p>
                  Oi, meu nome é Marcos Vinicius, tenho {getAge("06/01/1994")}{" "}
                  anos, há {getAge("01/01/2019")} anos descobri minha paixão por
                  programação e decidi migrar de carreira, então passei a me
                  dedicar a aprender as tecnologias mais atuais do mercado, e
                  hoje sou Desenvolvedor Front-end a caminho do Full-stack.
                </p>
              </div>
              <form action="/images/Marcos Vinicius 2022.pdf" target="_blank">
                <button type="submit">Currículo</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}

      <section ref={skillsRef} id="skills" className={stylesS.skillsContainer}>
        <div>
          <h1>Habilidades</h1>
          <div className={stylesS.skillsContent}>
            <Card1 />
            <Card2 />
          </div>
        </div>
      </section>

      {/* Projects Section */}

      <section
        ref={projectsRef}
        id="projects"
        className={stylesP.projectsContainer}
      >
        <div>
          <h1>Meus Projetos</h1>
          <Projects />
        </div>
      </section>

      {/* Contact Section */}

      <section
        ref={contactRef}
        id="contact"
        className={stylesC.contactContainer}
      >
        <div>
          <div className={stylesC.content}>
            <div className={stylesC.description}>
              <h2>Entre em Contato</h2>
              <p>
                Para me contratar ou tirar qualquer dúvida sinta-se a vontade
                para entrar em contato pelo Whatsapp ou email responderei assim
                que possível.
              </p>
              <div className={stylesC.info}>
                <div className={stylesC.item}>
                  <i className="fab fa-whatsapp"></i>
                  <div>
                    <p>Cell</p>
                    <p>(11) 96081-0791</p>
                  </div>
                </div>
                <div className={stylesC.item}>
                  <i className="fas fa-map-marker-alt"></i>

                  <div>
                    <p>Endereço</p>
                    <p>Av. Moinho Fabrini 339, SBC, Brasil</p>
                  </div>
                </div>
                <div className={stylesC.item}>
                  <i className="far fa-envelope"></i>
                  <div>
                    <p>Email</p>
                    <p>marcosvims@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={stylesC.formContainer}>
              <h2>Mande um Email </h2>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
