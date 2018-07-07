import * as types from './types';

const initState = {
  isOpenModal: false
}

export default function modal(state = initState, action) {
  switch(action.type) {
    case types.OPEN_MODAL: {
      return {
        isOpenModal: true,
      }
    }

    case types.CLOSE_MODAL: {
      return {
        isOpenModal: false,
      }
    }

    default: 
      return state
  }
}