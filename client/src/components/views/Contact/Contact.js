import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Contact.module.scss';

const Component = ({ className, children }) => (

  <div className={clsx(className, styles.root)}>
    <h1 className={styles.title}>Napisz do nas!</h1>

    <form className={styles.form}>
      <input type='text' name='name' placeholder='Imię' required className={styles.input_field} />
      <input type='text' name='surname' placeholder='Nazwisko' className={styles.input_field}/>
      <input type='email' name='email' placeholder='Email' className={styles.input_field}/>
      <textarea name='message' placeholder='Wiadomość' required maxLength={255} className={styles.message}/>
      <button type='submit' value='submit' className={styles.button}>Wyślij</button>
    </form>

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
  Component as Contact,
  // Container as Contact,
  Component as ContactComponent,
};
