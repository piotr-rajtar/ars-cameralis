import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

import { PageTitle } from '../../common/PageTitle/PageTitle';
import { PageSubtitle } from '../../common/PageSubtitle/PageSubtitle';
import { About } from '../../features/About/About';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <PageTitle>Fajnie, że jesteś!</PageTitle>

    <About />

    <section className={styles.repertoire}>
      <PageSubtitle>Repertuar</PageSubtitle>
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
