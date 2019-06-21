import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import AppPage from '../App'
import FormSurvey from '../pages/FormSurvey'

class RoutePage extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={AppPage}/>
                    <Route exact path='/survey' component={FormSurvey}/>
                </Switch>
            </HashRouter>
        )
    }
}
export default RoutePage;