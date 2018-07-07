import * as types from './types';

export const fetchOpenModal = () => {
  return{
    type: types.OPEN_MODAL,
  }
}

export const fetchCloseModal = () => {
    return{
      type: types.CLOSE_MODAL,
    }
  }
  