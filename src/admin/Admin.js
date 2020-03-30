import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AdminMenu from './AdminMenu';
import AdminPortfolio from './AdminPortfolio';

class Admin extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        // pasta raiz admin
        const path = this.props.match.url

        return (
            <div className="container">
                <h2>Painel Administtrativo</h2>
                <Route path={`/`} component={AdminMenu} />
                <Route path={`${path}/portfolio`} component={AdminPortfolio} />
            </div>
        )
    }
}

export default Admin;