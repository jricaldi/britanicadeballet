import React from 'react';
import Section from './Section';
import './sectionList.scss';

const renderSections = (data, isClassSection, openMessageDialog) =>
  data.map((item, index) => <Section info={ item }
    key={ index }
    isClassSection={ isClassSection }
    openMessageDialog={ openMessageDialog } />);

const SectionList = ({ scrollId, dataList, isClassSection, title, openMessageDialog }) => {
  const data = dataList;

  return <section id={ scrollId } class="sectionList">
    <h2 class="sectionList__title">{ title }</h2>
    { renderSections(data, isClassSection, openMessageDialog) }
  </section>;
};

export default SectionList;
