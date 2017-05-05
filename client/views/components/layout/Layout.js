import React from 'react';
import Header from '../../common/Header';
import '../views.scss';

const Layout = ({ children }) => {
  return <div>
    <Header />
    <main>{ children }</main>
  </div>;
};

export default Layout;
