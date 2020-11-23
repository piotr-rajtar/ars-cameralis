import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './PageSubtitle.module.scss';

const Component = ({ className, children }) => (
  <h1 className={clsx(className, styles.root)}>
    {children}
  </h1>
);

Component.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export {
  Component as PageSubtitle,
  Component as PageSubtitleComponent,
};
