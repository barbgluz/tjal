import * as actionTypes from './actionTypes';
import API from '../Api';

const fetchProcessStart = (state, action) => {
  return {
    type: actionTypes.FETCH_PROCESS_START
  };
};

const fetchProcessSuccess = (process) => {
  return {
    type: actionTypes.FETCH_PROCESS_SUCCESS,
    process: process
  };
};

const fetchProcessFail = (error) => {
  return {
    type: actionTypes.FETCH_PROCESS_FAIL,
    error: error
  };
}

export const fetchProcess = (num) => {
  return dispatch => {
    dispatch(fetchProcessStart());

    API.get(('/processo/' + num))
      .then( response => {
        dispatch(fetchProcessSuccess(response.data))
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchProcessFail(err));
      })
  };
};

