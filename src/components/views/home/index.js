import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Loading from '../../layout/styled-components/spinner'
import { searchUser, sortRepos } from '../../../store/github/thunks'
import Content from './containers/content'
import Form from './containers/form'
import List from './components/list/list'
import Card from './components/list/listCard'
import FilterContainer from './components/filter/container'
import FilterContent from './components/filter/content'
import Filters from './components/filter/filters'
import FilterIcon from './components/filter/filterIcon'
import Icon from './components/filter/icon'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleSort = this.handleSort.bind(this)
  }


  handleSubmit = async ({username}) => {
    return await this.props.searchUser(username);
  };

  handleSort() {
    // const repoOrdened = this.props.github.list.sort((a,b) => b.stargazers_count - a.stargazers_count );
    const repoOrdened = this.props.github.list.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at) );
    this.props.sortRepos(repoOrdened)
    console.log('hey', this.props.github.list.map(p => p.updated_at))
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
                  <Icon className="fa fa-filter" />
                  <FilterIcon>Filter by:</FilterIcon>
                  <div>
                    <Icon className="fa fa-star" onClick={() => this.handleSort()} />
                    <Icon className="fa fa-calendar" />  
                  </div>  
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
  sortRepos
})(Home)