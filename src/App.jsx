import React, { useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Copyright, Header, Alerts } from './components';
import { CardHolder, GetCash, Login } from './pages';

function App() {
  const notistackRef = useRef();

  const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key);
  };

  const alertClose = key => (
    <IconButton onClick={onClickDismiss(key)} color="inherit" size="small">
      <CloseIcon />
    </IconButton>
  );

  return (
    <SnackbarProvider
      ref={notistackRef}
      action={alertClose}
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Header />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/card-holder">
          <CardHolder />
        </Route>
        <Route path="/get-cash">
          <GetCash />
        </Route>
      </Switch>
      <Copyright />
      <Alerts />
    </SnackbarProvider>
  );
}

export default App;
