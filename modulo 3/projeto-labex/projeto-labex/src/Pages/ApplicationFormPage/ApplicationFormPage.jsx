import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 10vw;
    margin: 1rem auto;
    gap: 0.5rem;
    input { 
        border-radius: 10px;
        padding: 0.2rem;
    }
    select {
        border-radius: 10px;
        padding: 0.2rem;
    }
    `
export default function ApplicationFormPage() {
    return (
        <FlexContainer>
            <h4>
                Inscreva-se para uma viagem
            </h4>
            <select>
                <option value="Escolha uma viagem">Escolha uma viagem</option>
                {/* exemplo somente => */}
                <option value="marte">Marte</option>
            </select>
            <input type="text" name="Name" />
            <input type="number" name="Age" />
            <input type="text" name="Appliance text" />
            <input type="text" name="Job" />
            <select>
                <option value="Escolha um país">Escolha um país</option>
                {/* exemplo somente => */}
                <option value="Argentina">Argentina</option>
            </select>
            <div>
                <button>Voltar</button>
                <button>Enviar</button>
            </div>
        </FlexContainer>
    )
}