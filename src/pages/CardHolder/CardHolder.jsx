import React from 'react';
import { Avatar, Box, Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { resetProfile, selectUser } from '../../features/user/userSlice';

const CardHolder = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  if (user.id === -1) {
    return <Redirect to="/" />;
  }

  const resetUser = () => {
    dispatch(resetProfile());
  };

  return (
    <>
      <Card>
        <CardHeader
          avatar={<Avatar alt={user.name} src={user.avatar} />}
          title={user.name}
          subheader={user.card.replace(/\d{4}/g, m => `${m} `)}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {`On your balance: $${user.amount}`}
          </Typography>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="space-between" width={200} marginTop={4}>
        <Link to="/" onClick={resetUser}>
          Exit
        </Link>
        <Link to="/get-cash">Get cash</Link>
      </Box>
    </>
  );
};

export default CardHolder;
