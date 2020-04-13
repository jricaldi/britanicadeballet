import React from "react";
import cn from "classnames";
import { observer } from "mobx-react";
import renderHTML from "react-render-html";
import consultButton from "../../images/write-icon.svg";

import "./section.scss";

const renderDialogOpenButton = (openMessageDialog) => (
  <button
    className="section__details__consultButton"
    onClick={openMessageDialog}
  >
    <img src={consultButton} alt="consult button" />
  </button>
);

const renderTime = (time) => {
  if (typeof time === "string") {
    return <div>{time}</div>;
  }
  return time.map((t, index) => <div key={index}>{t}</div>);
};

const renderData = (details) => {
  if (typeof details === "string") {
    return renderHTML(details);
  }
  return details;
};

const Section = ({ info, isClassSection, openMessageDialog }) => {
  const backgroundSection = isClassSection ? "classSection" : "classTeachers";
  return (
    <article className="section" id={info.scrollId}>
      <div className="section__image">
        <img src={info.image} alt={info.name} data-aos="fade-up" />
      </div>
      <div className={cn("section__info", backgroundSection)}>
        <span className="section__info__name" data-aos="zoom-out-right">
          {info.name}
        </span>
        {info.extraName && (
          <span className="section__info__surname" data-aos="zoom-out-right">
            {info.extraName}
          </span>
        )}
      </div>
      <div className={cn("section__details", backgroundSection)}>
        <div
          className={cn("section__details__info", {
            noColunmsText: info.noColunmsText,
          })}
        >
          {renderData(info.details)}
        </div>
        {isClassSection &&
          info.enableSendEmails &&
          renderDialogOpenButton(openMessageDialog)}
      </div>
      <div className="section__horarios" id={`${info.scrollId}-horarios`}>
        {!info.showSchedules && (
          <div className="section__horarios__noShedules">
            <div>Pronto estaremos publicando nuevos horarios</div>
          </div>
        )}
        {info.showSchedules &&
          info.schedules.map((schedule) => (
            <div key={schedule.name} className="section__horarios__single">
              <div className="section__horarios__single__name">
                <div>{renderData(schedule.name)}</div>
              </div>
              {schedule.time && (
                <div className="section__horarios__single__time">
                  {renderTime(schedule.time)}
                </div>
              )}
            </div>
          ))}
      </div>
    </article>
  );
};

export default observer(Section);
