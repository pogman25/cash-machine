import React, { useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Container, IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Copyright, Header, Alerts } from './components';
import { CardHolder, GetCash, Login } from './pages';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(8, 'auto', 8),
  },
}));

function App() {
  const classes = useStyles();
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
      <Container component="main" maxWidth="sm" className={classes.root}>
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
      </Container>
      <Copyright />
      <Alerts />
    </SnackbarProvider>
  );
}

export default App;
