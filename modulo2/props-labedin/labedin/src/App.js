// greasy-dogs.surge.sh

import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://scontent.fcxj5-1.fna.fbcdn.net/v/t1.6435-9/191687709_105393995091613_175503015053552269_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dXYXExaoij0AX8XAGbz&_nc_ht=scontent.fcxj5-1.fna&oh=00_AT98lDMAq2-8Drt-OwCBWWnLKcrYfowInk1FG1S76nEKDQ&oe=625FADF9"
          nome="Sérgio"
          descricao="Oi, eu sou o Sérgio. Sou aluno da turma Shaw na Labenu. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles."
        />

        <CardPequeno
          email="sergiopdjr@hotmail.com"
          endereco="Gramado, Rio Grande do Sul"
        />


        <ImagemButton
          imagem="data:image/png;base64,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"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://scontent.fcxj5-1.fna.fbcdn.net/v/t39.30808-6/210158724_522338622448484_5384498662134750055_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1LqeIJynj18AX8EO2PL&_nc_ht=scontent.fcxj5-1.fna&oh=00_AT9utkBfYaVu1LCkxClfsF4RLXD7n6HMpKEBP1A6IqlbGw&oe=623F5E2B"
          nome="Beni Cozinha Criativa"
          descricao="Proprietário, cuidava de toda a parte administrativa e desenvolvimento dos pratos!"
        />

        <CardGrande
          imagem="https://scontent.fcxj5-1.fna.fbcdn.net/v/t1.6435-9/33964158_190094538229374_9190337712509419520_n.png?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=UtmI8kut1EMAX_8mX60&tn=tH0StRYk2cu-NOdS&_nc_ht=scontent.fcxj5-1.fna&oh=00_AT8faxXBJzQzMyFc2gqaAT149D-lYLdwg7LNU9wrqnLl1w&oe=625F9529"
          nome="Allora"
          descricao="Proprietário, cuidava do desenvolvimento das receitas, manutenção das máquinas e administração financeria e de pessoal!"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <a target="_blank" href='https://www.facebook.com/profile.php?id=100068630386834'>
          <ImagemButton
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
            texto="Facebook"
            linkImagem=""
          />
        </a>

        <a target="_blank" href='https://www.instagram.com/sergiopdias/'>
          <ImagemButton
            imagem="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-16.png"
            texto="Instagram"
            linkImagem=""
          />
        </a>
      </div>
    </div>
  );
}

export default App;
