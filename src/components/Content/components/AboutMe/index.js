import MePhoto from "../../../../assets/erpproject-yo.jpg";

import "./index.scss";

function AboutMe() {
  return (
    <div id="about-me" className="columns is-vcentered">
      <div className="column is-6 has-text-right-desktop">
        <figure className="me">
          <img src={MePhoto} alt="Eduardo Rodríguez" />
        </figure>
      </div>
      <div className="column">
        <div className="content">
          <h1 className="title is-size-1">Acerca de mí</h1>
          <h2 className="subtitle is-size-3 has-text-weight-light">
            Soy Eduardo, guitarrista de Perú 🎸
          </h2>
          <p className="box">
            Que transformo <b>canciones populares</b> a un estilo más propio
            como <b>rock/metal, fusión</b> y otros <b>géneros musicales</b>.
          </p>
          <p className="is-size-6">
            Por otro lado, estoy trabajando en mis propias composiciones con el
            objetivo de volver a los escenarios como guitarrista.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
