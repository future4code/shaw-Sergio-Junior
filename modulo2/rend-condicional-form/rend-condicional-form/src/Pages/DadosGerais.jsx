import React from "react";

export default class DadosGerais extends React.Component {
    render() {

        return (
            <div>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <p>1. Qual o seu nome?</p>
                <input />
                <p>2. Qual sua idade?</p>
                <input type="number" />
                <p>3. Qual seu email?</p>
                <input type="email" />
                <br />
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option value="valor1" selected>Ensino médio incompleto</option>
                    <option value="valor2">Ensino médio completo</option>
                    <option value="valor3">Ensino superior incompleto</option>
                    <option value="valor4">Ensino superior completo</option>
                </select>
            </div>
        )
    }
}