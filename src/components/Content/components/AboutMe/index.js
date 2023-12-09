import MePhoto from "../../../../assets/erpproject-yo.jpg";

import "./index.scss";

function AboutMe() {
  return (
    <section id="about-me" className="section">
      <div className="columns">
        <div className="column is-6 has-text-centered">
          <figure className="me">
            <img src={MePhoto} alt="Eduardo Rodríguez" />
          </figure>
        </div>
        <div className="column">
          <div className="content">
            <h1 className="title is-size-1">ERP Project</h1>
            <h2 className="subtitle has-text-weight-light is-size-3">
              Proyecto Rock hecho en Perú
            </h2>
            <p className="box">
              Este es un <span className="has-text-weight-bold">proyecto</span>{" "}
              que busca hacer covers rockeros de canciones populares ya sean en
              inglés o español, y/o a través de la{" "}
              <span className="has-text-weight-bold">
                colaboración de diferentes músicos
              </span>
              . Asimismo, no solo se hacen covers, también hay temas{" "}
              <span className="has-text-weight-bold">
                instrumentales y cantados
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
