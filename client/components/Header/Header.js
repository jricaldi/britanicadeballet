import React from 'react';
import './header.scss';

const Header = ({ children, ...props }) => <header { ...props }>
  { children }
</header>;

export default Header;
