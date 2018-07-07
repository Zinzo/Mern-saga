import * as types from './types';

const initState = {
  isFetching: false
}

export default function board(state = initState, action) {
  switch(action.type) {
    case types.FETCH_GET_BOARDLIST: {
      return {
        ...state,
        datas: [],
        isFetching: true,
      }
    }

    case types.FETCH_GET_BOARDLIST_SUCCESS: {
      return {
        ...state,
        datas: action.payload,
        isFetching: false,
      }
    }

    default: 
      return state
  }
}