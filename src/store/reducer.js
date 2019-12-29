import { updateObject } from './utility';
import * as actionTypes from './actionTypes';

const initialState = {
  processNumber: "",
  process: null,
  error: null
};

const fetchProcessStart = (state, action) => {
  return updateObject(state, { error: null, loading: true   });
};

const fetchProcessSuccess = (state, action) => {
  return updateObject(state, {
    process: action.process,
    error: null,
    loading: false
  });

};

const fetchProcessFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    process: null,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_PROCESS_START: return fetchProcessStart(state, action);
    case actionTypes.FETCH_PROCESS_SUCCESS: return fetchProcessSuccess(state, action);
    case actionTypes.FETCH_PROCESS_FAIL: return fetchProcessFail(state, action);
    default:
      return state;
  }
}

export default reducer;
