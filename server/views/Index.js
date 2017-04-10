import React from 'react';
import Layout from './Layout';

const Index = ({ ...rest }) =>
  <Layout { ...rest }>
    <div id="content" />
  </Layout>;

export default Index;
