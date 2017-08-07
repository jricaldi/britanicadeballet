import React from 'react';
import Section from './Section';
import './sectionList.scss';

const renderSections = (data, isClassSection) =>
  data.map((item, index) => <Section info={ item } key={ index } isClassSection={ isClassSection } />);

const SectionList = ({ scrollId, dataList, isClassSection, title }) => {
  const data = dataList;

  return <section id={ scrollId } class="sectionList">
    <h2 class="sectionList__title">{ title }</h2>
    { renderSections(data, isClassSection) }
  </section>;
};

export default SectionList;
