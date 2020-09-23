import React from 'react';
import { Avatar, Container, makeStyles, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';
import { LoginForm } from '../../components';
import { showError } from '../../features/noti/notiSlice';
import { getUser } from '../../features/user/userSlice';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(8, 'auto', 8),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(getUser(data));
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <LoginForm submit={submit} />
    </Container>
  );
};

export default Login;
