import { 
  SEARCH_USER_REQUESTED, 
  SEARCH_USER_FULFILLED, 
  SEARCH_USER_REJECTED, 
  ATT_REPOS, 
  SAVE_USER,
  LOAD_COMMITS_REQUESTED,
  LOAD_COMMITS_FULFILLED,
  LOAD_COMMITS_REJECTED,
  ATT_COMMITS
} from "./action-types";

const INITIAL_STATE = {
  loading: false,
  list: null,
  error: null,
  user: null,
  commits: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_USER_REQUESTED: {
      return {
        ...state,
        loading: true,
        list: null,
        error: null
      };
    }
    case SEARCH_USER_FULFILLED: {
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: null,
      };
    }
    case SEARCH_USER_REJECTED:
    case LOAD_COMMITS_REJECTED: {
      return {
        ...INITIAL_STATE,
        error: action.payload
      };
    }
    case LOAD_COMMITS_REQUESTED: {
      return {
        ...state,
        loading: true,
        error: null,
        commits: null
      }
    }
    case LOAD_COMMITS_FULFILLED: {
      return {
        ...state,
        loading: false,
        error: null,
        commits: action.payload
      }
    }
    case ATT_REPOS: {
      return {
        ...state,
        list: action.payload
      }
    }
    case SAVE_USER: {
      return {
        ...state,
        user: action.payload
      }
    }
    case ATT_COMMITS: {
      return {
        ...state,
        commits: action.payload
      }
    }
    default:
      return state;
  }
}
