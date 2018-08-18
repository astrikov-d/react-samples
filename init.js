import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {HashRouter, Route, NavLink} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import Characters from './containers/characters';
import Settings from './containers/settings';

import rootReducer from './reducers/index';


let store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <NavLink exact={true} to="/" className="nav-link" activeClassName="active">
                            {gettext('My characters')}
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/settings/" className="nav-link" activeClassName="active">
                            {gettext('Profile settings')}
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <Route exact path="/" component={Characters}/>
                    <Route exact path="/settings/" component={Settings}/>
                </div>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('id_app')
);
