import React, { Fragment } from 'react'
import PrivateRoute from '../private-route'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import baseStyles from './base-styles'
import Content from '../layout/styled-components/content'
import Home from '../views/home'
import Repo from '../views/repo'

const Root = ({store, auth: auth}) => {    
    baseStyles();
    return (<Provider store={store}>
        <Router>
            <Content>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <PrivateRoute path="/repos/:name" component={Repo}/>
                    </Switch>
                </Fragment>
            </Content>
        </Router>
    </Provider>)
};

Root.propTypes = {
    store: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Root)