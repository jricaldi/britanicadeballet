import React from 'react';
import { UpMedium, DownSmall } from '../../components/Responsive/Responsive';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import Header from '../../components/Header/Header';

const Navigation = () =>
  <Header>
    <UpMedium>
      <NavDesktop />
    </UpMedium>
    <DownSmall>
      <NavMobile />
    </DownSmall>
  </Header>;

export default Navigation;
