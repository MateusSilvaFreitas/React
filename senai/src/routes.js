import React from 'react';
import {Browser, BrowserRouter, Route, Switch} from 'react-router-dom';
import Teste from './paginas/teste/index';
import HelloMessage from './components/HelloMessage';

function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={HelloMessage}/>
            <Route path="/teste" component={Teste}/>
        </Switch>
    </BrowserRouter>
    );
}

export default Routes; 