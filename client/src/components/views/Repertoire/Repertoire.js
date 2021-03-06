import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Repertoire.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h1>Repertoire</h1>
    {children}
  </div>
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
  Component as Repertoire,
  // Container as Repertoire,
  Component as RepertoireComponent,
};
