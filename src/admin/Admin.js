import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { auth } from '../firebase-config'

import AdminMenu from './AdminMenu';
import AdminPortfolio from './AdminPortfolio';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            estaLogando: true,
            estaAutenticado: false,
            user: null
        }
    }

    // ao carregar o componente
    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                estaLogando: false,
                estaAutenticado: !!user,
                user
            })
        })
    }

    render() {
        if (this.state.estaLogando) {
            return <p>Aguarde...</p>
        }
        if (!this.state.estaAutenticado) {
            return <Redirect to='/login' />
        }

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