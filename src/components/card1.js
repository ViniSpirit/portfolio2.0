import stylesS from "../styles/skills.module.css";

function Card1() {
  return (
    <div className={stylesS.card}>
      <h1>Front-end</h1>
      <div className={stylesS.tech}>
        <span>JavaScript</span>
        <span>90%</span>
      </div>
      <div className={stylesS.progressiveBar}>
        <div className={stylesS.javascript}></div>
      </div>
      <div className={stylesS.tech}>
        <span>React</span>
        <span>90%</span>
      </div>
      <div className={stylesS.progressiveBar}>
        <div className={stylesS.react}></div>
      </div>
      <div className={stylesS.tech}>
        <span>Html</span>
        <span>80%</span>
      </div>
      <div className={stylesS.progressiveBar}>
        <div className={stylesS.html}></div>
      </div>
      <div className={stylesS.tech}>
        <span>CSS</span>
        <span>80%</span>
      </div>
      <div className={stylesS.progressiveBar}>
        <div className={stylesS.css}></div>
      </div>

      <div className={stylesS.tech}>
        <span>Next</span>
        <span>80%</span>
      </div>
      <div className={stylesS.progressiveBar}>
        <div className={stylesS.next}></div>
      </div>
      <div className={stylesS.tech}>
        <span>TypeScript</span>
        <span>60%</span>
      </div>
      <div className={stylesS.progressiveBar}>
        <div className={stylesS.typescript}></div>
      </div>
    </div>
  );
}

export default Card1;
