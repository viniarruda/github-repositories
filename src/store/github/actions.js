import { createAction } from "redux-actions";
import { 
  SEARCH_USER_FULFILLED, 
  SEARCH_USER_REJECTED, 
  SEARCH_USER_REQUESTED, 
  ATT_REPOS, 
  SAVE_USER,
  LOAD_COMMITS_REQUESTED,
  LOAD_COMMITS_FULFILLED,
  LOAD_COMMITS_REJECTED,
  ATT_COMMITS
} from "./action-types";

export const searchUserRequest = createAction(SEARCH_USER_REQUESTED);
export const searchUserFulfilled = createAction(SEARCH_USER_FULFILLED);
export const searchUserRejected = createAction(SEARCH_USER_REJECTED);
export const loadCommitsRequest = createAction(LOAD_COMMITS_REQUESTED);
export const loadCommitsFulfilled = createAction(LOAD_COMMITS_FULFILLED);
export const loadCommitsRejected = createAction(LOAD_COMMITS_REJECTED);
export const attRepos = createAction(ATT_REPOS);
export const saveUser = createAction(SAVE_USER);
export const attCommits = createAction(ATT_COMMITS);