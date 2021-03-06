import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ZombieCounterGame from './zombie-counter-game';
import * as serviceWorker from './service-worker';
import {Provider} from "react-redux";
import store from "./conf/redux/store";

ReactDOM.render(
    <Provider store={store}>
        <ZombieCounterGame />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
