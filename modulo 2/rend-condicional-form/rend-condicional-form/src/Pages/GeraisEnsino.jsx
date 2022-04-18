import React from "react";

export default class GeraisEnsino extends React.Component {
    render() {
        return (
            <div>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input />
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option value="valor1" selected>Nenhum</option>
                    <option value="valor2">Curso técnico</option>
                    <option value="valor3">Curso de inglês</option>
                </select>
            </div>
        )
    }
}