import React from 'react';
import Header from '../../common/Header';

const Layout = ({ children }) =>
  <div>
    <Header />
    <main>{ children }</main>
  </div>;

export default Layout;
