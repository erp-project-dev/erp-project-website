import React, { useState } from "react";

import "./index.scss";
import announcements from "./announcements.json";

function getAnnouncements() {
  const currentDate = new Date();

  const enabledItems = announcements.filter((item) => item.enabled);

  const preferredItems = enabledItems.filter((item) => {
    if (item.preferredStartDate && item.preferredEndDate) {
      const startDate = new Date(item.preferredStartDate);
      const endDate = new Date(item.preferredEndDate);
      return (
        !isNaN(startDate) &&
        !isNaN(endDate) &&
        currentDate >= startDate &&
        currentDate <= endDate
      );
    }
    return false;
  });

  const remainingItems = enabledItems.filter(
    (item) => !preferredItems.includes(item)
  );

  return [...preferredItems, ...remainingItems].map((item) => item.content);
}

function Announcement() {
  const contents = getAnnouncements();

  // Estado para rastrear el índice actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Manejar el clic en la flecha izquierda
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contents.length - 1 : prevIndex - 1
    );
  };

  // Manejar el clic en la flecha derecha
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === contents.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="announcement" className="notification is-black">
      <div className="columns is-centered">
        <div className="column is-2 has-text-right is-hidden-mobile">
          <button className="button is-danger is-outlined" onClick={handlePrev}>
            ←
          </button>
        </div>

        <div
          className="column is-8 has-text-centered"
          dangerouslySetInnerHTML={{ __html: contents[currentIndex] }}
        ></div>

        <div className="column is-2 is-hidden-mobile">
          <button className="button is-danger is-outlined" onClick={handleNext}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Announcement;
