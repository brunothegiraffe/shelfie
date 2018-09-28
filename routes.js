import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './src/components/dashboard/Dashboard';
import Form from './src/components/form/Form';


export default(
    <div>
        <Switch>
            <Route path='/' component={ Dashboard } exact />
            <Route path='/add' component={ Form } />
            {/* <Route path='/classlist/:class' component={ ClassList } /> */}
            <Route path='/edit/:id' component={ Form } />
        </Switch>
    </div>
)