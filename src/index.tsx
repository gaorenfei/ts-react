import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

declare const module: any;
if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'))

