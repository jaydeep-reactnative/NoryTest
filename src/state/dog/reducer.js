import { actions } from './actions';

export const DOG_STATUS = {
  INITIAL: 'initial',
  LOADING: 'loading',
  ERROR: 'error',
  SUCCESS: 'success',
};

const initialState = {
  status: DOG_STATUS.INITIAL,
  data: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_DOGS:
      return {
        ...state,
        status: DOG_STATUS.LOADING,
      };
    case actions.FETCH_DOGS_SUCCESS:
      return {
        data: action.payload,
        status: DOG_STATUS.SUCCESS,
      };
    case actions.FETCH_DOGS_ERROR:
      return {
        dogs: [],
        status: DOG_STATUS.ERROR,
      };
    default:
      return state;
  }
};
