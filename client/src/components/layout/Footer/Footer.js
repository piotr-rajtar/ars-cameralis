import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Component = ({ className, children }) => (
  <footer className={clsx(className, styles.root)}>
    <ul className={styles.footer}>
      <li className={styles.footer_item + ' ' + styles.facebook}>
        <a href='https://www.facebook.com/acameralis' target='_blank' rel='noreferrer' className={styles.link}>
          <FacebookIcon className={styles.icon} />
        </a>
      </li>
      <li className={styles.footer_item + ' ' + styles.instagram}>
        <a href='https://www.instagram.com/chor_arscameralis' target='_blank' rel='noreferrer' className={styles.link}>
          <InstagramIcon className={styles.icon} />
        </a>
      </li>
      <li className={styles.footer_item + ' ' + styles.youtube}>
        <a href='https://www.youtube.com/channel/UCalCJcqBtt66lsN4p-jCfLA' target='_blank' rel='noreferrer' className={styles.link}>
          <YouTubeIcon className={styles.icon} />
        </a>
      </li>
    </ul>
  </footer>
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
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
