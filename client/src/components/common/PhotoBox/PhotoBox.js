import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PhotoBox.module.scss';

const Component = ({ className, name, photo }) => (
  <div className={clsx(className, styles.root)}>
    <img src={photo} className={styles.photo} alt={`${name} zdjęcie`}/>
    <p className={styles.photo_title}>{name}</p>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = state => ({
//   someAction: arg => dispatchEvent(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PhotoBox,
  // Container as PhotoBox,
  Component as PhotoBoxComponent,
};
