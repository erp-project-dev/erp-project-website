import AboutMe from "./components/AboutMe";
import AvailableFor from "./components/AvailableFor";
import FollowMe from "./components/FollowMe";
import Spotify from "./components/Spotify";

function Content() {
  return (
    <div className="hero-body">
      <div className="container">
        <AboutMe />

        <div className="columns">
          <div className="column is-7">
            <FollowMe />
          </div>
          <div className="column">
            <AvailableFor />
          </div>
        </div>

        <Spotify />
      </div>
    </div>
  );
}

export default Content;
