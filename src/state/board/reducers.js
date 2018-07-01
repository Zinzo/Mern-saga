import * as types from './types';

const initState = {
  port: '',
  name: '값이 존재하지 않습니다.'
}

export default function board(state = initState, action) {
  console.log("BBB",action.type);
  switch(action.type) {
    case types.FETCH_GET_BOARDLIST: {
      return {
        ...state,
      }
    }

    case types.FETCH_GET_BOARDLIST_SUCCESS: {
      return {
        
      }
    }

    default: 
      return state
  }
}