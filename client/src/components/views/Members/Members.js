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

import styles from './Members.module.scss';

SwiperCore.use([Navigation, Pagination]);

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h1 className={styles.title}>Członkowie</h1>

    <section className={styles.voices}>
      <h2 className={styles.subtitle}>Dyrygent</h2>
      <div className={styles.single_box}>
        <img src='https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_960_720.png' className={styles.photo} alt='dyrygent'/>
        <p className={styles.photo_title}>Dyrygent</p>
      </div>
    </section>

    <section className={styles.voices}>
      <h2 className={styles.subtitle}>Sopran</h2>
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
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='sopran'/>
            <p className={styles.photo_title}>Sopran #1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='sopran'/>
            <p className={styles.photo_title}>Sopran #2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='sopran'/>
            <p className={styles.photo_title}>Sopran #3</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='sopran'/>
            <p className={styles.photo_title}>Sopran #4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='sopran'/>
            <p className={styles.photo_title}>Sopran #5</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='sopran'/>
            <p className={styles.photo_title}>Sopran #6</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='sopran'/>
            <p className={styles.photo_title}>Sopran #7</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='sopran'/>
            <p className={styles.photo_title}>Sopran #8</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <section className={styles.voices}>
      <h2 className={styles.subtitle}>Alt</h2>
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
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='alt'/>
            <p className={styles.photo_title}>Alt #1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='alt'/>
            <p className={styles.photo_title}>Alt #2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='alt'/>
            <p className={styles.photo_title}>Alt #3</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='alt'/>
            <p className={styles.photo_title}>Alt #4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='alt'/>
            <p className={styles.photo_title}>Alt #5</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='alt'/>
            <p className={styles.photo_title}>Alt #6</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='alt'/>
            <p className={styles.photo_title}>Alt #7</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296989_960_720.png' className={styles.photo} alt='alt'/>
            <p className={styles.photo_title}>Alt #8</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <section className={styles.voices}>
      <h2 className={styles.subtitle}>Tenor</h2>
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
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='tenor'/>
            <p className={styles.photo_title}>Tenor #1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='tenor'/>
            <p className={styles.photo_title}>Tenor #2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='tenor'/>
            <p className={styles.photo_title}>Tenor #3</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='tenor'/>
            <p className={styles.photo_title}>Tenor #4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='tenor'/>
            <p className={styles.photo_title}>Tenor #5</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='tenor'/>
            <p className={styles.photo_title}>Tenor #6</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='tenor'/>
            <p className={styles.photo_title}>Tenor #7</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='tenor'/>
            <p className={styles.photo_title}>Tenor #8</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <section className={styles.voices}>
      <h2 className={styles.subtitle}>Bas</h2>
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
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='bas'/>
            <p className={styles.photo_title}>Bas #1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='bas'/>
            <p className={styles.photo_title}>Bas #2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='bas'/>
            <p className={styles.photo_title}>Bas #3</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='bas'/>
            <p className={styles.photo_title}>Bas #4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='bas'/>
            <p className={styles.photo_title}>Bas #5</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='bas'/>
            <p className={styles.photo_title}>Bas #6</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='bas'/>
            <p className={styles.photo_title}>Bas #7</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide_box}>
            <img src='https://cdn.pixabay.com/photo/2014/04/03/10/44/person-311292_960_720.png' className={styles.photo} alt='bas'/>
            <p className={styles.photo_title}>Bas #8</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  </div>
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
  Component as Members,
  // Container as Members,
  Component as MembersComponent,
};
