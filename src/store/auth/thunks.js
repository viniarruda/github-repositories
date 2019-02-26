import { auth } from './actions'

export const authentication = () => async (dispatch, getState) => {
  
  dispatch(auth())
  
  return true
}