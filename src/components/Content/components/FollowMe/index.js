import ga from "../../../../common/ga";
import { SocialIcon } from "react-social-icons";

import "./index.scss";

const gaClick = (category, action) => {
  console.info(`${category}: ${action}`);
  ga.event({
    category: category,
    action: action,
  });
};

function FollowMe() {
  return (
    <section id="follow-me" className="section">
      <div className="has-text-centered">
        <h2 className="title">Sígueme en</h2>
        <ul className="links">
          <li>
            <SocialIcon
              onClick={() => gaClick("FollowMe", "Click on Instagram")}
              url="https://www.instagram.com/erpprojectofficial/"
            />
          </li>
          <li>
            <SocialIcon
              onClick={() => gaClick("FollowMe", "Click on YouTube")}
              url="https://www.youtube.com/c/erpproject?sub_confirmation=1"
            />
          </li>
          <li>
            <SocialIcon
              onClick={() => gaClick("FollowMe", "Click on Spotify")}
              url="https://open.spotify.com/intl-es/artist/6xR1HRj6SzReee9R2EkOUo?si=5fa9cbe535da4ee6"
            />
          </li>
        </ul>
        <p>
          o escríbeme a mi{" "}
          <a
            onClick={() => gaClick("FollowMe", "Click on E-mail")}
            href="mailto:erodriguezp105@gmail.com"
          >
            <span className="has-text-primary">correo electrónico</span>
          </a>
        </p>
      </div>
    </section>
  );
}

export default FollowMe;
