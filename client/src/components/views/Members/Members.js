import React from 'react';
import PropTypes from 'prop-types';

import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getConductor, getAllSopranos, getAllAltos, getAllTenors, getAllBass } from '../../../redux/membersRedux';

import styles from './Members.module.scss';

import { PageTitle } from '../../common/PageTitle/PageTitle';
import { PageSubtitle } from '../../common/PageSubtitle/PageSubtitle';

SwiperCore.use([Navigation, Pagination]);

const Component = ({ className, conductor, sopranos, altos, tenors, bass }) => (
  <div className={clsx(className, styles.root)}>
    <PageTitle>Oto my:</PageTitle>

    <section className={styles.voices}>
      <PageSubtitle>Dyrygent</PageSubtitle>
      <div className={styles.single_box}>
        <img src={conductor.photo} className={styles.photo} alt={conductor.name}/>
        <p className={styles.photo_title}>{conductor.name}</p>
      </div>
    </section>

    <section className={styles.voices}>
      <PageSubtitle>Sopran</PageSubtitle>
      <Swiper
        grabCursor = 'true'
        slidesPerView = {1}
        breakpoints = {{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        navigation
      >
        {sopranos.map(soprano => (
          <SwiperSlide key={soprano.id}>
            <div className={styles.slide_box}>
              <img src={soprano.photo} className={styles.photo} alt={`${soprano.name} zdjęcie`}/>
              <p className={styles.photo_title}>{soprano.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    <section className={styles.voices}>
      <PageSubtitle>Alt</PageSubtitle>
      <Swiper
        grabCursor = 'true'
        slidesPerView = {1}
        breakpoints = {{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        navigation
      >
        {altos.map(alto => (
          <SwiperSlide key={alto.id}>
            <div className={styles.slide_box}>
              <img src={alto.photo} className={styles.photo} alt={`${alto.name} zdjęcie`}/>
              <p className={styles.photo_title}>{alto.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    <section className={styles.voices}>
      <PageSubtitle>Tenor</PageSubtitle>
      <Swiper
        grabCursor = 'true'
        slidesPerView = {1}
        breakpoints = {{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        navigation
      >
        {tenors.map(tenor => (
          <SwiperSlide key={tenor.id}>
            <div className={styles.slide_box}>
              <img src={tenor.photo} className={styles.photo} alt={`${tenor.name} zdjęcie`}/>
              <p className={styles.photo_title}>{tenor.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    <section className={styles.voices}>
      <PageSubtitle>Bas</PageSubtitle>
      <Swiper
        grabCursor = 'true'
        slidesPerView = {1}
        breakpoints = {{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        navigation
      >
        {bass.map(bassus => (
          <SwiperSlide key={bassus.id}>
            <div className={styles.slide_box}>
              <img src={bassus.photo} className={styles.photo} alt={`${bassus.name} zdjęcie`}/>
              <p className={styles.photo_title}>{bassus.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  conductor: PropTypes.object,
  sopranos: PropTypes.array,
  altos: PropTypes.array,
  tenors: PropTypes.array,
  bass: PropTypes.array,
};

const mapStateToProps = state => ({
  conductor: getConductor(state),
  sopranos: getAllSopranos(state),
  altos: getAllAltos(state),
  tenors: getAllTenors(state),
  bass: getAllBass(state),
});

// const mapDispatchToProps = state => ({
//   someAction: arg => dispatchEvent(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Members,
  Container as Members,
  Component as MembersComponent,
};
