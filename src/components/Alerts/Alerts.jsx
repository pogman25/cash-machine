import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { getError, getSuccess, hideNoti } from '../../features/noti/notiSlice';

const Alerts = () => {
  const { enqueueSnackbar } = useSnackbar();
  const error = useSelector(getError);
  const success = useSelector(getSuccess);
  const dispatch = useDispatch();

  const closeNotify = useCallback(
    type => {
      dispatch(hideNoti(type));
    },
    [dispatch],
  );

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, {
        variant: 'error',
        onClose: () => {
          closeNotify('error');
        },
      });
    }
  }, [closeNotify, enqueueSnackbar, error]);

  useEffect(() => {
    if (success) {
      enqueueSnackbar(success, {
        variant: 'success',
        onClose: () => {
          closeNotify('success');
        },
      });
    }
  }, [closeNotify, enqueueSnackbar, success]);

  return null;
};

export default Alerts;
