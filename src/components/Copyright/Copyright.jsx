import React, { memo } from 'react';
import { Box, Link, Typography } from '@material-ui/core';

const Copyright = () => {
  return (
    <Box height={48} display="flex" alignItems="center" justifyContent="center">
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/pogman25">
          PogAlex
        </Link>
        {` ${new Date().getFullYear()}.`}
      </Typography>
    </Box>
  );
};

export default memo(Copyright);
