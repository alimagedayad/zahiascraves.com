import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router/AppRouter";
import '../src/styles/styles.scss'

const output = (
    <Fragment>
        <AppRouter/>
    </Fragment>
)

ReactDOM.render(output, document.getElementById('app'));