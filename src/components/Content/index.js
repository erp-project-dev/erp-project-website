/* eslint-disable jsx-a11y/anchor-is-valid */
import AboutMe from "./components/AboutMe";
import Announcement from "./components/Announcement";
import AvailableFor from "./components/AvailableFor";
import FollowMe from "./components/FollowMe";
import Spotify from "./components/Spotify";
import YouTube from "./components/YouTube";

function Content() {
  return (
    <div className="hero-body erp-project">
      <div className="container">
        <Announcement />
        <AboutMe />

        <div className="columns">
          <div className="column is-6">
            <FollowMe />
          </div>
          <div className="column">
            <AvailableFor />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <Spotify />
          </div>
          <div className="column is-6">
            <YouTube />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
