import { apiClient } from '../../utils/services';

export const actions = {
  FETCH_DOGS: 'FETCH_DOGS',
  FETCH_DOGS_SUCCESS: 'FETCH_DOGS_SUCCESS',
  FETCH_DOGS_ERROR: 'FETCH_DOGS_ERROR',
};

export const fetchDogs = () => async dispatch => {
  try {
    dispatch({ type: actions.FETCH_DOGS });
    const response = await apiClient.get('/hound/images');
    dispatch({
      type: actions.FETCH_DOGS_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: actions.FETCH_DOGS_ERROR });
  }
};
