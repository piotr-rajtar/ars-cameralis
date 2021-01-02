import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Contact.module.scss';

import { PageTitle } from '../../common/PageTitle/PageTitle';
import { Form } from '../../features/Form/Form';

import { emailParser } from '../../../utils';

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
    const { name, surname, email, message } = this.state.formData;

    event.preventDefault();

    let error = null;

    let validEmail = emailParser(email);

    if(!name || !surname || !email || !message) error = 'Wszystkie pola muszą być uzupełnione';
    else if(name.length < 3 || name.length > 20) error = 'Niedozwolona długość imienia. Dozwolona liczba znaków: 3-20';
    else if(surname.length < 3 || surname.length > 20) error = 'Niedozwolona długość nazwiska. Dozwolona liczba znaków: 3-20';
    else if(message.length > 500) error = 'Niedozwolona długość wiadomości. Maksymalna liczba znaków: 500';
    else if(!validEmail) error = 'Nieprawidłowy adres email';

    this.showAlert(error);

    if(!error) this.clearForm();
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
        alertSeverity: '',
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

        <Form
          name={name}
          surname={surname}
          email={email}
          message={message}
          formSubmit={this.formSubmit}
          handleChange={this.handleChange}
        />
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
