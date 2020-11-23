import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './PageTitle.module.scss';

const Component = ({ className, pageTitle }) => (
  <h1 className={clsx(className, styles.root)}>
    {pageTitle}
  </h1>
);

Component.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export {
  Component as PageTitle,
  Component as PageTitleComponent,
};
