import React, { useReducer } from 'react';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import produce from 'immer';
import PinItems from './PinItems';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formGroup: {
    flexDirection: 'row',
  },
}));

const initialState = {
  card: '',
  pin1: '',
  pin2: '',
  pin3: '',
  pin4: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'card-input':
      return produce(state, draft => {
        draft.card = action.payload.replace(/\d{4}/g, m => {
          return `${m} `;
        });
      });
    case 'select-pin':
      return produce(state, draft => {
        draft[action.payload.name] = action.payload.value;
      });
    default:
      return state;
  }
};

const LoginForm = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmit = e => {
    e.preventDefault();
  };

  const cardChange = ({ target }) => {
    dispatch({ type: 'card-input', payload: target.value.replace(/\D/g, '') });
  };

  const onSelect = ({ target }) => {
    dispatch({ type: 'select-pin', payload: { name: target.name, value: target.value } });
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="credit-card"
        label="Your credit card"
        name="card"
        autoComplete="off"
        value={state.card}
        onChange={cardChange}
      />
      <Box display="flex" marginTop={2} marginBottom={2}>
        <Box display="flex" flexDirection="column">
          <Typography>Pin Code</Typography>
          <Box display="flex">
            {Array.from(Array(4)).map((_, index) => (
              <PinItems
                key={index}
                index={index}
                value={state[`pin${index + 1}`]}
                onSelect={onSelect}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        color="primary"
        className={classes.submit}
      >
        Enter
      </Button>
    </form>
  );
};

export default LoginForm;
