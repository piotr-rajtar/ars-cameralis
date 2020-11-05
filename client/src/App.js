import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Calendar } from './components/views/Calendar/Calendar';
import { Contact } from './components/views/Contact/Contact';
import { Gallery } from './components/views/Gallery/Gallery';
import { Homepage } from './components/views/Homepage/Homepage';
import { Members } from './components/views/Members/Members';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <CssBaseline />
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/calendar' component={Calendar} />
          <Route exact path='/members' component={Members} />
          <Route exact path='/Gallery' component={Gallery} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App };
