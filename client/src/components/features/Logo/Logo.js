import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Logo.module.scss';

const Component = ({ className }) => (
  <h1 className={clsx(className, styles.root)}>
    <NavLink exact to='/' className={styles.link}>
        Ars Cameralis
    </NavLink>
  </h1>
);

Component.propTypes = {
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
  Component as Logo,
  // Container as Logo,
  Component as LogoComponent,
};
