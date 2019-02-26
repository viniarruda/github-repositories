import { searchUserRequest, searchUserFulfilled, searchUserRejected, attRepos, saveUser, loadCommitsRequest, loadCommitsFulfilled, loadCommitsRejected } from './actions'
import { searchRepos, searchCommits } from './queries'

export const searchUser = user => async (dispatch, getState) => {
  dispatch(searchUserRequest())
  dispatch(saveUser(user))
  const response = await searchRepos(user)
  
  if(!response) {
    const {message} = response;
    dispatch(searchUserRejected(message))

    throw 'Error' 
  }
  
  dispatch(searchUserFulfilled(response))
  return true
}


export const sortRepos = repos => async (dispatch, getState) => {
  dispatch(attRepos(repos))

  return true
}

export const loadCommits = (user, repo) => async (dispatch, getState) => {
  dispatch(loadCommitsRequest())
  const response = await searchCommits(user, repo)

  if(!response) {
    const { message } = response;
    dispatch(loadCommitsRejected(message))

    throw 'Error' 
  }
  
  dispatch(loadCommitsFulfilled(response))
  return true
}