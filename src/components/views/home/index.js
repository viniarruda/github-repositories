import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Loading from '../../layout/styled-components/spinner'
import { searchUser, sortRepos } from '../../../store/github/thunks'
import { authentication } from '../../../store/auth/thunks'
import Content from './containers/content'
import Form from './containers/form'
import List from './components/list/list'
import Card from './components/list/listCard'
import FilterContainer from './components/filter/container'
import FilterContent from './components/filter/content'
import Filters from './components/filter/filters'
import FilterIcon from './components/filter/filterIcon'
import Icon from '../../layout/styled-components/icon'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repoOrdened: null,
      asc: false
    }
    this.handleSort = this.handleSort.bind(this)
  }


  handleSubmit = async ({username}) => {
    this.props.authentication()
    return await this.props.searchUser(username);
  };

  handleSort(type) {
    if(type === 'star') {
      if(!this.state.asc) {
        this.setState({
          repoOrdened: this.props.github.list.sort((a,b) => b.stargazers_count - a.stargazers_count ),
          asc: true
        })
      } else {
        this.setState({
          repoOrdened: this.props.github.list.sort((a,b) => a.stargazers_count - b.stargazers_count ),
          asc: false
        })
      }
    } else {
      if(!this.state.asc) {
        this.setState({
          repoOrdened: this.props.github.list.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at)),
          asc: true
        })
      } else {
        this.setState({
          repoOrdened: this.props.github.list.sort((a,b) => new Date(a.updated_at) - new Date(b.updated_at)),
          asc: false
        })
      }
    }
    this.state.repoOrdened && this.props.sortRepos(this.state.repoOrdened)
  }

  render() {
    const { github } = this.props

    return (
      <Content>
        <Loading show={github.loading} />
        <FilterContainer>
          <FilterContent>
            <Form onSubmit={this.handleSubmit}/>
            {
              github.list &&
                <Filters>
                  <FilterIcon>Filter by:</FilterIcon>
                  <Fragment>
                    <Icon className="fa fa-star" onClick={() => this.handleSort('star')} />
                    <Icon className="fa fa-calendar" onClick={() => this.handleSort('date')} />  
                  </Fragment>  
                </Filters>
            }
          </FilterContent>
        </FilterContainer>
        <List>
          {
            github.list &&
              github.list.map((u, key) => 
                <Card key={key} name={u.name} private={u.private} update={u.updated_at} stars={u.stargazers_count} avatar={u.owner.avatar_url} avatarAlt={u.owner.login}/>
              )
          }
        </List>
      </Content>
    )
  }
}

const mapStateToprops = (state) => ({
  github: state.github
})

export default connect(mapStateToprops, {
  searchUser,
  sortRepos,
  authentication
})(Home)