import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginRight: theme.spacing(2),
  },
  select: {
    padding: theme.spacing(3),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.grey[500],
    fontSize: 24,
    lineHeight: 1,
    borderRadius: 12,
    '&:focus': {
      borderRadius: 12,
    },
  },
}));

const PinItems = ({ index, value, onSelect }) => {
  const classes = useStyles();
  return (
    <Select
      classes={{ select: classes.select, root: classes.root }}
      IconComponent="span"
      name={`pin${index + 1}`}
      value={value}
      onChange={onSelect}
      required
    >
      <MenuItem value={0}>0</MenuItem>
      <MenuItem value={1}>1</MenuItem>
      <MenuItem value={2}>2</MenuItem>
      <MenuItem value={3}>3</MenuItem>
      <MenuItem value={4}>4</MenuItem>
      <MenuItem value={5}>5</MenuItem>
      <MenuItem value={6}>6</MenuItem>
      <MenuItem value={7}>7</MenuItem>
      <MenuItem value={8}>8</MenuItem>
      <MenuItem value={9}>9</MenuItem>
    </Select>
  );
};

PinItems.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default PinItems;
