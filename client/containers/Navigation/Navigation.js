import React from 'react';
import { OnAtMostPhablet, OnAtLeastTablet } from '../../components/Responsive/Responsive';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import Header from '../../components/Header/Header';

const Navigation = () =>
  <Header>
    <OnAtLeastTablet>
      <NavDesktop />
    </OnAtLeastTablet>
    <OnAtMostPhablet>
      <NavMobile />
    </OnAtMostPhablet>
  </Header>;

export default Navigation;
