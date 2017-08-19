import React from 'react';
import './section.scss';
import consultButton from '../../../static/images/write-icon.svg';

const renderDialogOpenButton = openMessageDialog =>
  <button class="section__details__consultButton" onClick={ openMessageDialog }>
    <img src={ consultButton } alt="consult button" />
  </button>;

const Section = ({ info, isClassSection, openMessageDialog }) => {
  const backgoundSection = (isClassSection && 'classSection') || 'classTeachers';
  return <article class="section">
    <div class="section__image">
      <img src={ info.image } alt={ info.name } data-aos="zoom-in" data-aos-once />
    </div>
    <div class={ `section__info ${backgoundSection}` }>
      <span class="section__info__name" data-aos="zoom-out-right" data-aos-once>{ info.name }</span>
      { info.extraName && <span class="section__info__surname" data-aos="zoom-out-right" data-aos-once>{ info.extraName }</span> }
    </div>
    <div class={ `section__details ${backgoundSection}` }>
      <div class="section__details__info">
        { info.details }
      </div>
      { isClassSection && renderDialogOpenButton(openMessageDialog) }
    </div>
    <div class="section__horarios">
      { info.schedules.map(schedule =>
        <div key={ schedule.name } class="section__horarios__single">
          <div class="section__horarios__single__name">
            <div>{ schedule.name }</div>
          </div>
          { schedule.time &&
          <div class="section__horarios__single__time">
            <div>{ schedule.time }</div>
          </div> }
        </div>) }
    </div>
  </article>;
};

export default Section;
