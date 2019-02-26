import React from 'react'
import { connect } from 'react-redux'
import { loadCommits } from '../../../store/github/thunks'

const Post = (props) => {
  const { match, github } = props


  props.loadCommits(github.user,match.params.name)
  
  return (
    <div>
      Repo page
    </div>
  )
}

const mapStateToProps = (state) => ({
  github: state.github
})

export default connect(mapStateToProps, {
  loadCommits
})(Post)