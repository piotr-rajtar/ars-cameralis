import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Menu.module.scss';

const Component = ({ className, children }) => (
  <nav className={clsx(className, styles.root)}>
    <ul className={styles.navigation}>
      <li className={styles.navigation_item}>
        <NavLink exact to='/' activeClassName={styles.active} className={styles.navigation_link}>
            O nas
        </NavLink>
      </li>
      <li className={styles.navigation_item}>
        <NavLink exact to='/czlonkowie' activeClassName={styles.active} className={styles.navigation_link}>
            Członkowie
        </NavLink>
      </li>
      <li className={styles.navigation_item}>
        <NavLink exact to='/repertuar' activeClassName={styles.active} className={styles.navigation_link}>
            Repertuar
        </NavLink>
      </li>
      <li className={styles.navigation_item}>
        <NavLink exact to='/oferta' activeClassName={styles.active} className={styles.navigation_link}>
            Oferta
        </NavLink>
      </li>
      <li className={styles.navigation_item}>
        <NavLink exact to='/galeria' activeClassName={styles.active} className={styles.navigation_link}>
            Galeria
        </NavLink>
      </li>
      <li className={styles.navigation_item}>
        <NavLink exact to='/kontakt' activeClassName={styles.active} className={styles.navigation_link}>
            Kontakt
        </NavLink>
      </li>
    </ul>
  </nav>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = state => ({
//   someAction: arg => dispatchEvent(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Menu,
  // Container as Menu,
  Component as MenuComponent,
};
