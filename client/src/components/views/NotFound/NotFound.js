import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './NotFound.module.scss';

import { PageTitle } from '../../common/PageTitle/PageTitle';
import { PageSubtitle } from '../../common/PageSubtitle/PageSubtitle';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>

    <PageTitle className={styles.title}>Page Not Found...</PageTitle>
    <PageSubtitle className={styles.subtitle}>404</PageSubtitle>

    <div className={styles.image_box}>
      <img className={styles.photo} src='https://cdn.pixabay.com/photo/2016/05/30/14/23/detective-1424831_960_720.png' alt='detective' />
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
