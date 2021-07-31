import stylesP from "../styles/projects.module.css"

function Projects() {
  return (
    <div className={stylesP.images}>
      {/* project 0 */}
      <div>
        <div>
          <img src="/projects/movies/movies.png" alt="" />
          <h2>Movies</h2>
          <p className={stylesP.description}>
            <strong>Descrição:</strong> App para pesquisar filmes utilizando a
            the movie db API.
          </p>
          <p className={stylesP.techs}>
            <strong>Techs:</strong> NextJS, The Movie DB API, Custom Hooks, CSS.
          </p>
        </div>
        <div className={stylesP.links}>
          <a href="https://movies-gules.vercel.app/" target="_blank">
            Link <i className="fas fa-external-link-alt" aria-hidden="true"></i>
          </a>
          <a href="javascript:void(0)" target="_blank">
            Github <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* project 1 */}

      <div>
        <div>
          <img src="/projects/moveit/moveit.png" alt="" />
          <h2>Moveit</h2>
          <p className={stylesP.description}>
            <strong>Descrição:</strong> App de desafios para melhorar a saúde de
            quem passa muitas horas em frente ao computador.
          </p>
          <p className={stylesP.techs}>
            <strong>Techs:</strong> NextJS, Context API, TypeScript, CSS.
          </p>
        </div>
        <div className={stylesP.links}>
          <a href="https://moveit-inky-nine.vercel.app/" target="_blank">
            Link <i className="fas fa-external-link-alt" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/ViniSpirit/moveit" target="_blank">
            Github <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* project 2 */}

      <div>
        <div>
          <img src="/projects/login/login.png" alt="" />
          <h2>Login/Registro</h2>
          <p className={stylesP.description}>
            <strong>Descrição:</strong> Sistema de login e registro básico com
            senha criptografada salva no banco de dados.
          </p>
          <p className={stylesP.techs}>
            <strong>Techs:</strong> NextJS, TypeScript, ContextAPI, Serverless,
            CSS/Material-UI, MongoDB.
          </p>
        </div>
        <div className={stylesP.links}>
          <a href="https://vini-login-project.vercel.app/" target="_blank">
            Link <i className="fas fa-external-link-alt" aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/ViniSpirit/login-register-project"
            target="_blank"
          >
            Github <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* project 3 */}

      <div>
        <div>
          <img src="/projects/portfolio/portfolio.png" alt="" />
          <h2>Portfólio 1.0 </h2>
          <p className={stylesP.description}>
            <strong>Descrição:</strong> Primeira versão do meu portfólio a ideia
            do projeto foi aludir a um site de uma empresa.
          </p>
          <p className={stylesP.techs}>
            <strong>Techs:</strong> ReactJS, CSS, NodeJS, Express,
            React-Bootstrap.
          </p>
        </div>
        <div className={stylesP.links}>
          <a href="https://vini-portfolio.herokuapp.com/" target="_blank">
            Link <i className="fas fa-external-link-alt" aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/ViniSpirit/vini-portfolio"
            target="_blank"
          >
            Github <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* project 4 */}

      <div>
        <div>
          <img src="/projects/blog/blog.png" alt="" />
          <h2>Blog</h2>
          <p className={stylesP.description}>
            <strong>Descrição:</strong> Desenvolvi este projeto para testar o
            poder do NextJS com geração de páginas estáticas e renderização do
            lado do servidor.
          </p>
          <p className={stylesP.techs}>
            <strong>Techs:</strong> NextJS, CSS, NodeJS, Express, MongoDB,
            Markdown.
          </p>
        </div>
        <div className={stylesP.links}>
          <a href="https://vini-blog-vinispirit.vercel.app/" target="_blank">
            Link <i className="fas fa-external-link-alt" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/ViniSpirit/vini-blog" target="_blank">
            Github <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* project 5 */}

      <div>
        <div>
          <img src="/projects/calculadora/calculadora.png" alt="" />
          <h2>Calculadora</h2>
          <p className={stylesP.description}>
            <strong>Descrição:</strong> Meu primeiro projeto em ReactJS me deu
            uma boa noção sobre a biblioteca e lógica de programação no geral.
          </p>
          <p className={stylesP.techs}>
            <strong>Techs:</strong> ReactJS, CSS.
          </p>
        </div>
        <div className={stylesP.links}>
          <a href="https://vini-calculadora.herokuapp.com/" target="_blank">
            Link <i className="fas fa-external-link-alt" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/ViniSpirit/Calculator" target="_blank">
            Github <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
