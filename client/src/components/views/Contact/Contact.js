import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Contact.module.scss';

import { PageTitle } from '../../common/PageTitle/PageTitle';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

class Component extends React.Component {

  state = {
    formData: {
      name: '',
      surname: '',
      email: '',
      message: '',
    },
    snackbar: {
      snackbarOpen: false,
      snackbarMessage: '',
      alertSeverity: '',
    },
  }

  static propTypes = {
    className: PropTypes.string,
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    const { formData } = this.state;

    this.setState({
      formData: {
        ...formData,
        [id]: value,
      },
    });
  }

  formSubmit = (event) => {
    event.preventDefault();
    alert('wyslane');

    this.clearForm();
  }

  clearForm = () => {

    this.setState({
      formData: {
        name: '',
        surname: '',
        email: '',
        message: '',
      },
    });
  }

  snackbarClose = () => {
    this.setState({
      snackbar: {
        snackbarOpen: false,
        snackbarMessage: '',
      },
    });
  }

  showAlert(error) {
    if(error) {
      this.setState({
        snackbar: {
          snackbarOpen: true,
          snackbarMessage: error,
          alertSeverity: 'error',
        },
      });
    }
    else {
      this.setState({
        snackbar: {
          snackbarOpen: true,
          snackbarMessage: 'Wiadomość została wysłana, dziękujemy!',
          alertSeverity: 'success',
        },
      });
    }
  }

  render() {
    const { className } = this.props;
    const { name, surname, email, message } = this.state.formData;
    const { snackbar } = this.state;

    return(
      <div className={clsx(className, styles.root)}>

        <Snackbar
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
          open={snackbar.snackbarOpen}
          autoHideDuration={6000}
          onClose={this.snackbarClose}
        >
          <Alert
            variant='filled'
            severity={snackbar.alertSeverity}
            onClose={this.snackbarClose}
          >
            {snackbar.snackbarMessage}
          </Alert>
        </Snackbar>

        <PageTitle>Napisz do nas!</PageTitle>

        <form className={styles.form} autoComplete='off' onSubmit={this.formSubmit}>

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
              onChange={this.handleChange}
            />

            <input
              type='text'
              id='surname'
              name='nazwisko'
              className={styles.input_field_name}
              value={surname}
              minLength={3}
              maxLength={20}
              onChange={this.handleChange}
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
              className={styles.input_field}
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div className={styles.form_group}>
            <label
              htmlFor='message'
              className={styles.label}
            >
              <span>Wiadomość ({message.length}/500)</span>
            </label>

            <textarea
              id='message'
              name='wiadomość'
              required
              maxLength={500}
              className={styles.message}
              value={message}
              onChange={this.handleChange}
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

      </div>
    );
  }
}

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
