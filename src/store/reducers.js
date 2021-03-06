import { combineReducers } from "redux";
import github from './github/reducers'
import auth from './auth/reducers'
import {reducer as formReducer} from 'redux-form';

const appReducer = combineReducers({
  github,
  auth,
  form: formReducer
});

export default (state, action) => appReducer(state, action);
