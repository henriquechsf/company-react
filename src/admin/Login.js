import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { auth } from '../firebase-config'

class Login extends Component {
    constructor(props) {
        super(props)

        // estado
        this.state = {
            estaAutenticado: false,
            estaLogando: false,
            erro: false
        }

        this.email = null
        this.senha = null

        // bind
        this.autenticaUsuario = this.autenticaUsuario.bind(this)
    }

    autenticaUsuario() {
        this.setState({ estaLogando: true })
        // autenticação
        auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
            .then(user => {
                console.log('Usuário logado', user)
                this.setState({ estaAutenticado: true, estaLogando: false })
            })
            .catch(err => {
                console.log('Erro', err)
                this.setState({ erro: true, estaLogando: false })
            })
    }

    render() {
        // encaminhar para Admin se estiver logado
        if (this.state.estaAutenticado) {
            return <Redirect to='/admin' />
        }
        return (

            <div className="container" style={{ width: 500, marginTop: 70 }}>

                {/**Forma de enviar inputs sem o form */}
                <div className="form-group">
                    <label htmlFor="email">Login</label>
                    <input type="email" name="email" ref={ref => this.email = ref} className="form-control" id="email" placeholder="Digite seu email" />
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" ref={ref => this.senha = ref} className="form-control" id="senha" placeholder="Digite a sua senha" />
                    {this.state.erro && <small id="emailHelp" class="form-text text-muted">Email e/ou Senha incorretos.</small>}
                </div>

                <button type="button" disabled={this.state.estaLogando} onClick={this.autenticaUsuario} className="btn btn-primary">Entrar</button>

            </div>

        )
    }
}

export default Login;