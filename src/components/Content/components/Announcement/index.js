import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

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
      <button className="button is-danger is-outlined" onClick={handlePrev}>
        <FaAngleLeft />
      </button>

      <div
        className="notification-content has-text-centered"
        dangerouslySetInnerHTML={{ __html: contents[currentIndex] }}
      ></div>

      <button className="button is-danger is-outlined" onClick={handleNext}>
        <FaAngleRight />
      </button>
    </div>
  );
}

export default Announcement;
