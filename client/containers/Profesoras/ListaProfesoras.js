import React from "react";
import { observer } from "mobx-react";
import SectionList from "../../components/Section/SectionList";
import { dataProfesoras } from "../../helpers/database";

const ListaProfesoras = () => (
  <SectionList scrollId="id-profesoras" dataList={dataProfesoras} />
);

export default observer(ListaProfesoras);
