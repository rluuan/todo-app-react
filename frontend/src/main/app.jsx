import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.css'
import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Router from './routes'

export default function(props) {
    return (
        <div className="container">
            <Menu />
            <Router />
        </div>
    )
}