import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.brand} to="/">
            <span className={s.brandTxt}>Get Meme Shirts</span>
          </Link>
          <Navigation />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
