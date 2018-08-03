import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

function action() {
  return {
    title: 'React Starter Kit',
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  };
}

export default action;
