import React from "react";
import { observer } from "mobx-react";
import "./header.scss";

const Header = ({ children, ...props }) => (
  <header {...props}>{children}</header>
);

export default observer(Header);
