import React from 'react';
import PropTypes from 'prop-types';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getConductor, getAllSopranos, getAllAltos, getAllTenors, getAllBass } from '../../../redux/membersRedux';

import styles from './Members.module.scss';

import { PageTitle } from '../../common/PageTitle/PageTitle';
import { PageSubtitle } from '../../common/PageSubtitle/PageSubtitle';

import { MemberSwiper } from '../../features/MemberSwiper/MemberSwiper';

const Component = ({ className, conductor, sopranos, altos, tenors, bass }) => (
  <div className={clsx(className, styles.root)}>
    <PageTitle>Oto my:</PageTitle>

    <section className={styles.voices}>
      <PageSubtitle>Dyrygent</PageSubtitle>
      <MemberSwiper slides={conductor} />
    </section>

    <section className={styles.voices}>
      <PageSubtitle>Sopran</PageSubtitle>
      <MemberSwiper slides={sopranos} />
    </section>

    <section className={styles.voices}>
      <PageSubtitle>Alt</PageSubtitle>
      <MemberSwiper slides={altos} />
    </section>

    <section className={styles.voices}>
      <PageSubtitle>Tenor</PageSubtitle>
      <MemberSwiper slides={tenors} />
    </section>

    <section className={styles.voices}>
      <PageSubtitle>Bas</PageSubtitle>
      <MemberSwiper slides={bass} />
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
