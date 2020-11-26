import React from 'react';
import PropTypes from 'prop-types';

import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MemberSwiper.module.scss';

import { PhotoBox } from '../../common/PhotoBox/PhotoBox';

SwiperCore.use([Navigation, Pagination]);

const Component = ({ className, slides }) => (
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
    className={clsx(className, styles.root)}
  >
    {slides.map(slide => (
      <SwiperSlide key={slide.id}>
        <PhotoBox name={slide.name} photo={slide.photo} />
      </SwiperSlide>
    ))}
  </Swiper>
);

Component.propTypes = {
  className: PropTypes.string,
  slides: PropTypes.array,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = state => ({
//   someAction: arg => dispatchEvent(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as MemberSwiper,
  // Container as MemberSwiper,
  Component as MemberSwiperComponent,
};




