import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './MessageCounter.module.scss';

const Component = ({ className, length }) => (
  <span className={clsx(className, styles.root)}>
    {length}/500
  </span>
);

Component.propTypes = {
  length: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export {
  Component as MessageCounter,
  Component as MessageCounterComponent,
};
