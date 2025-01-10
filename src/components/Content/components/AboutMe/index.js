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
          <h1 className="title is-size-1">Eduardo Rodríguez</h1>
          <h2 className="subtitle is-size-3 has-text-weight-light">
            🎸 Guitarrista peruano
          </h2>
          <p className="box">
            Que ha venido haciendo <b>colaboraciones</b> con otros músicos para
            reimaginar temas a un estilo más propio y{" "}
            <b>actualmente trabajando</b> en sus <b>temas propios</b>.
          </p>
          <p className="is-size-6">
            Puedes seguirme en mis redes sociales para estar al tanto de mis
            últimos proyectos y presentaciones.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
