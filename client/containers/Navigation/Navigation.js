import React from "react";
import { observer } from "mobx-react";
import NavMobile from "./NavMobile";
import Header from "../../components/Header/Header";

const Navigation = () => (
  <Header>
    <NavMobile />
  </Header>
);

export default observer(Navigation);
