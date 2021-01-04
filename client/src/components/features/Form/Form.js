import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Form.module.scss';

import { MessageCounter } from '../MessageCounter/MessageCounter';

const Component = ({ className, formSubmit, handleChange, name, surname, email, message }) => (
  <form className={clsx(className, styles.root)} autoComplete='off' onSubmit={formSubmit}>
    <div className={styles.form_group_name}>
      <label
        htmlFor='name'
        className={styles.label}
      >
        <span>Imię</span>
      </label>

      <label
        htmlFor='surname'
        className={styles.label}
      >
        <span>Nazwisko</span>
      </label>

      <input
        type='text'
        id='name'
        name='imię'
        required
        className={styles.input_field_name}
        value={name}
        minLength={3}
        maxLength={20}
        onChange={handleChange}
      />

      <input
        type='text'
        id='surname'
        name='nazwisko'
        required
        className={styles.input_field_name}
        value={surname}
        minLength={3}
        maxLength={20}
        onChange={handleChange}
      />
    </div>

    <div className={styles.form_group}>
      <label
        htmlFor='email'
        className={styles.label}
      >
        <span>Email</span>
      </label>

      <input
        type='email'
        id='email'
        name='email'
        required
        className={styles.input_field}
        value={email}
        onChange={handleChange}
      />
    </div>

    <div className={styles.form_group}>
      <label
        htmlFor='message'
        className={styles.message_label}
      >
        <span>Wiadomość</span>
        <MessageCounter length={message.length} />
      </label>

      <textarea
        id='message'
        name='wiadomość'
        required
        maxLength={500}
        className={styles.message}
        value={message}
        onChange={handleChange}
      />
    </div>

    <button
      type='submit'
      value='submit'
      className={styles.button}
    >
      <span>Wyślij</span>
    </button>
  </form>
);

Component.propTypes = {
  className: PropTypes.string,
  formSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export {
  Component as Form,
  Component as FormComponent,
};
