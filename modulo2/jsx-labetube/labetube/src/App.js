
import './App.css';
import lupa from './img/lupa.png';

/*sad-yam.surge.sh*/

function App() {

  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>Lab Tube</h1>
          <input type="text" placeholder="Pesquisar" id="campoDeBusca" /> 
          <img src={lupa} />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical"><a href='#'>Início</a></li>
              <li className="botoes-meunu-vertical"><a href='#'>Em alta</a></li>
              <li className="botoes-meunu-vertical"><a href='#'>Inscrições</a></li>
              <hr />
              <li className="botoes-meunu-vertical"><a href='#'>Originais</a></li>
              <li className="botoes-meunu-vertical"><a href='#'>Histórico</a></li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onclick="reproduzVideo()">
              <img onClick={reproduzVideo} src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
            </div>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>

    </div>
  );
}

export default App;
