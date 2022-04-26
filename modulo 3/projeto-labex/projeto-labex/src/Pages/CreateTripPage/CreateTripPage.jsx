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
export default function CreateTripPage() {
    return (
        <FlexContainer>
            <h4>
                Criar viagem
            </h4>
            <input type="text" name="Name" />
            <select>
                <option value="Escolha um planeta">Escolha um planeta</option>
                {/* exemplo somente => */}
                <option value="marte">Marte</option>
            </select>
            <input type="date" name="data" />
            <input type="text" name="Description" />
            <input type="text" name="Duration" />
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