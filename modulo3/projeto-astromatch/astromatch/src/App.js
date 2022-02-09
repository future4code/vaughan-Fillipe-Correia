import logo from './logo.svg';
import { useState } from 'react'
import { useEffect } from 'react'
import HomeScreen from './components/HomeScreen';
import MatchesScreen from './components/MatchesScreen';



// Leia atentamente as especificações:

// - 1. Tela inicial
    
//     Ao entrar na nossa aplicação, o usuário deve ser capaz de ver uma opção de perfil para escolher. Devem ser mostrados a foto, o nome e a descrição dos perfis. Dois botões devem estar na tela: um que permita "dar *match*" (uma escolha "positiva") e o outro que permita descartar a sugestão (uma escolha "negativa"). Por fim, deve existir um botão que leve para a tela de matches.
    
//     Nessa tela, você vai usar os endpoints: *Get profile to choose* (pegar perfil para escolher) e  *Choose Person* (escolher pessoa)
    
// - 2. Tela de matches
    
//     Essa tela é constituída de uma lista de usuários que "deram *match*" com o usuário que estiver usando a nossa aplicação. Devem ser mostradass as fotos e os nomes dos perfis. 
    
//     Nessa tela, você vai usar o endpoint: *Get Matches* (pegar matches)
    
// - 3. Possibilidade de Resetar
    
//     O usuário da nossa aplicação pode limpar as informações dos matches que deram a qualquer momento em qualquer tela do site. Para isso, adicione um botão que fique bem claro que faz isso (com uma mensagem ou um ícone pertinente)
    
//     Nessa tela, você vai usar o endpoint: *Clear (limpar)*

const App = () => {
  return (
    <div>
      
        <HomeScreen></HomeScreen>
        <MatchesScreen></MatchesScreen>


    </div>
  );
}

export default App;
