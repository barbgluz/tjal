import reducer from './reducer';
import * as actionTypes from './actionTypes';

describe('process reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      processNumber: "",
      process: null,
      error: null
    })
  })

  it('should store the process', () => {
    expect(reducer({
      processNumber: "",
      process: null,
      error: null
    }, {
      type: actionTypes.FETCH_PROCESS_SUCCESS,
      process: 'some-process',
      error: null,
      loading: false
    })).toEqual({
      processNumber: "",
      process: 'some-process',
      error: null,
      loading: false
    })
  })
})
