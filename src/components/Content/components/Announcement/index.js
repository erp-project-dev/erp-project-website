import "./index.scss";
import announcements from "./announcements.json";

function getRandomAnnouncement() {
  const randomIndex = Math.floor(Math.random() * announcements.length);
  return announcements[randomIndex];
}

function Announcement() {
  return (
    <div id="announcement" className="columns is-centered">
      <div className="column is-8">
        <div
          className="notification is-black has-text-centered"
          dangerouslySetInnerHTML={{ __html: getRandomAnnouncement() }}
        ></div>
      </div>
    </div>
  );
}

export default Announcement;
