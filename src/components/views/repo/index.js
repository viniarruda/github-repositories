import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCommits, filterCommits } from '../../../store/github/thunks'
import Content from './containers/content'
import CommitList from './components/commitList'
import CommitItem from './components/commitItem'
import Title from '../../layout/styled-components/title'
import Flex from './components/flex'
import LinkBack from './components/linkBack'
import Form from './containers/form'
import _ from 'lodash'

class Post extends Component {
  
  componentDidMount() {
    const { match, github, loadCommits } = this.props
    loadCommits(github.user,match.params.name)
  }

  handleSubmit = async ({term}) => {
    const filtered = _.filter(this.props.github.commits, (i) => 
      i.commit.message.indexOf(term)>-1
    )
    return await this.props.filterCommits(filtered)
  };

  render() {
   const { github } = this.props

    return (
      <Content>
        <Flex>
          <LinkBack to='/'>
            <i className="fa fa-caret-left" />
            Back 
          </LinkBack>
          <Title padding='40px 20px'>Commits list</Title>
          <Form onSubmit={this.handleSubmit}/>
        </Flex>
        <CommitList>
          {
            github.commits &&
              github.commits.map((commit, key) =>
                key < 20 &&
                  <CommitItem key={key} {...commit} />
              )
          }
        </CommitList>
      </Content>
    )
  }
}

const mapStateToProps = (state) => ({
  github: state.github
})

export default connect(mapStateToProps, {
  loadCommits,
  filterCommits
})(Post)