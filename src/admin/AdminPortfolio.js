import React, { Component } from 'react'

import config, { storage } from '../firebase-config'

class AdminPortfolio extends Component {
    constructor(props) {
        super(props)

        // bind para acessar o this em escopo diferente
        this.gravaPortfolio = this.gravaPortfolio.bind(this)
    }

    // grava os dados no Firebase
    gravaPortfolio(e) {
        e.preventDefault()

        // arquivo passa no input imagem
        const arquivo = this.imagem.files[0]
        const { name, size, type } = arquivo
        console.log(name, size, type)

        // referencia do arquivo
        const ref = storage.ref(name)
        // upload e retorno das informações da gravação
        ref.put(arquivo)
            .then(img => {
                // pega a url da imagem gerada no firebase para salvar no site
                img.ref.getDownloadURL()
                    .then(downloadURL => {
                        const novoPortfolio = {
                            titulo: this.titulo.value,
                            descricao: this.descricao.value,
                            imagem: downloadURL
                        }

                        // gravação dos dados no Firebase
                        config.push('portfolio', {
                            data: novoPortfolio
                        })
                    })
            })
    }

    render() {
        return (
            <div style={{ padding: '0 120px' }}>
                <h2>Portfófio - Área Administrativa</h2>

                <form onSubmit={this.gravaPortfolio}>
                    <div className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" className="form-control" id="titulo" ref={(ref) => this.titulo = ref} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <input type="text" className="form-control" id="descricao" ref={(ref) => this.descricao = ref} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem">Imagem</label>
                        <input type="file" className="form-control" id="imagem" ref={(ref) => this.imagem = ref} />
                    </div>
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </form>
            </div>
        )
    }
}

export default AdminPortfolio;