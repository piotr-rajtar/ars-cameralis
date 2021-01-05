import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import './styles/global.scss';

import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Contact } from './components/views/Contact/Contact';
import { Gallery } from './components/views/Gallery/Gallery';
import { Homepage } from './components/views/Homepage/Homepage';
import { Members } from './components/views/Members/Members';
import { Offer } from './components/views/Offer/Offer';
import { Repertoire } from './components/views/Repertoire/Repertoire';
import { NotFound } from './components/views/NotFound/NotFound';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <CssBaseline />
        <MainLayout>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/czlonkowie' component={Members} />
            <Route exact path='/repertuar' component={Repertoire} />
            <Route exact path='/oferta' component={Offer} />
            <Route exact path='/galeria' component={Gallery} />
            <Route exact path='/kontakt' component={Contact} />
            <Route path='*' component={NotFound} />
          </Switch>
        </MainLayout>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
