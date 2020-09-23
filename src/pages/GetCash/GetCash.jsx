import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { showError } from '../../features/noti/notiSlice';
import { getCashRequest, selectIsFetching, selectUser } from '../../features/user/userSlice';

const GetCash = () => {
  const dispatch = useDispatch();
  const [cash, setCash] = useState('');
  const user = useSelector(selectUser);
  const isFetching = useSelector(selectIsFetching);

  if (user.id === -1) {
    return <Redirect to="/" />;
  }

  const onChange = ({ target }) => {
    setCash(target.value.replace(/\D/g, ''));
  };

  const onSubmit = e => {
    e.preventDefault();
    if (user.amount > cash) {
      dispatch(getCashRequest(cash));
      setCash('');
    } else {
      dispatch(showError('not enough cash on the account'));
    }
  };

  return (
    <>
      <Card>
        <CardHeader
          avatar={<Avatar alt={user.name} src={user.avatar} />}
          title={user.name}
          subheader={`balance: $${user.amount}`}
        />
        <CardContent>
          <form onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="amount"
              label="How much cash"
              name="card"
              autoComplete="off"
              value={cash}
              onChange={onChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isFetching}
            >
              Get cash
            </Button>
          </form>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="space-between" width={200} marginTop={4}>
        <Link to="/card-holder">Cancel</Link>
      </Box>
    </>
  );
};

export default GetCash;
