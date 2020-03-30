import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.email = null
        this.senha = null

        // bind
        this.autenticaUsuario = this.autenticaUsuario.bind(this)
    }

    autenticaUsuario() {
        console.log(this.email.value, this.senha.value)
    }

    render() {
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
                </div>

                <button type="button" onClick={this.autenticaUsuario} className="btn btn-primary">Entrar</button>

            </div>

        )
    }
}

export default Login;