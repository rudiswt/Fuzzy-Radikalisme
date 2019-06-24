import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import AppPage from '../App'
import FormSurvey from '../pages/FormSurvey'

class RoutePage extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={FormSurvey}/>
                    <Route exact path='/hasil' component={AppPage}/>
                </Switch>
            </HashRouter>
        )
    }
}
export default RoutePage;