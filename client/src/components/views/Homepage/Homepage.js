import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

import { PageTitle } from '../../common/PageTitle/PageTitle';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <PageTitle>Fajnie, że jesteś!</PageTitle>

    <section className={styles.about}>
      <h1 className={styles.subtitle}>O nas</h1>
      <p className={styles.about_description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    </section>

    <section className={styles.repertoire}>
      <h1 className={styles.subtitle}>Repertuar</h1>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.box}>
            <img
              src='https://cdn.pixabay.com/photo/2016/03/23/20/49/music-note-1275650_960_720.png'
              className={styles.photo_box}
              alt='nuta'
            />
            <span className={styles.title_box}>Lorem</span>
          </div>
          <div className={styles.box}>
            <img
              src='https://cdn.pixabay.com/photo/2016/03/23/20/49/music-note-1275650_960_720.png'
              className={styles.photo_box}
              alt='nuta'
            />
            <span className={styles.title_box}>Ipsum</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.box}>
            <img
              src='https://cdn.pixabay.com/photo/2016/03/23/20/49/music-note-1275650_960_720.png'
              className={styles.photo_box}
              alt='nuta'
            />
            <span className={styles.title_box}>Lorem</span>
          </div>
          <div className={styles.box}>
            <img
              src='https://cdn.pixabay.com/photo/2016/03/23/20/49/music-note-1275650_960_720.png'
              className={styles.photo_box}
              alt='nuta'
            />
            <span className={styles.title_box}>Ipsum</span>
          </div>
        </div>
      </div>
    </section>

  </div>
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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
