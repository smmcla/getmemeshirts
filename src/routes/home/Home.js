import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {

  };

  render() {
    return (
      <div className={s.root}>

      </div>
    );
  }
}

export default withStyles(s)(Home);
