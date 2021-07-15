import stylesS from "../styles/skills.module.css";

function Card2() {
  return (
    <div className={stylesS.card}>
      <h1>Back-end</h1>
      <div className={stylesS.tech}>
        <span>Express</span>
        <span>80%</span>
      </div>
      <div className={stylesS.progressiveBar}>
        <div className={stylesS.express}></div>
      </div>
      <div className={stylesS.tech}>
        <span>Node</span>
        <span>60%</span>
      </div>
      <div className={stylesS.progressiveBar}>
        <div className={stylesS.node}></div>
      </div>

      <div className={stylesS.tech}>
        <span>MongoDB</span>
        <span>50%</span>
      </div>
      <div className={stylesS.progressiveBar}>
        <div className={stylesS.mongo}></div>
      </div>
      <h1>Idiomas</h1>

      <div className={stylesS.tech}>
        <span>Inglês</span>
        <span>70%</span>
      </div>
      <div className={stylesS.progressiveBar}>
        <div className={stylesS.ingles}></div>
      </div>
      <div className={stylesS.tech}>
        <span>Português</span>
        <span>100%</span>
      </div>
      <div className={stylesS.progressiveBar}>
        <div className={stylesS.portugues}></div>
      </div>
    </div>
  );
}

export default Card2;
