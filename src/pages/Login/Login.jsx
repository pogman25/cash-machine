import React from 'react';
import { Avatar, makeStyles, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LoginForm } from '../../components';
import { getUser, selectIsFetching, selectUser } from '../../features/user/userSlice';

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
  const history = useHistory();
  const user = useSelector(selectUser);
  const isFetching = useSelector(selectIsFetching);

  if (user.id >= 0) {
    history.push('/card-holder');
  }

  const submit = data => {
    dispatch(getUser(data));
  };

  return (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <LoginForm submit={submit} isFetching={isFetching} />
    </>
  );
};

export default Login;
