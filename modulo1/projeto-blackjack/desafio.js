/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Bem vindo ao jogo de Blackjack!");
if (confirm("Quer iniciar uma nova rodada?")) {
  console.log("Iniciando uma nova rodada");
} else {
  console.log("O jogo acabou");
}

function jogar() {
  const cartasUsuario = [];
  const cartasComputador = [];

  let pontuacaoUsuario = 0;
  let pontuacaoComputador = 0;

  const cartaUsuario = comprarCarta();
  const cartaUsuario2 = comprarCarta();
  const cartaComputador = comprarCarta();
  const cartaComputador2 = comprarCarta();

  cartasUsuario.push(cartaUsuario.texto + " " + cartaUsuario2.texto);
  cartasComputador.push(cartaComputador.texto + " " + cartaComputador2.texto);

  pontuacaoUsuario += cartaUsuario.valor + cartaUsuario2.valor;
  pontuacaoComputador += cartaComputador.valor + cartaComputador2.valor;

  function vencedor() {
    if (pontuacaoUsuario > pontuacaoComputador) {
      return " O usuário ganhou!";
    } else if (pontuacaoComputador > pontuacaoUsuario) {
      return " O computador ganhou!";
    } else {
      return " Empate!";
    }
  }

  if (
    confirm(
      "Suas cartas são " +
        cartasUsuario +
        " " +
        ". A carta revelada do computador é " +
        cartasComputador +
        ". Deseja comprar mais uma carta?"
    )
  ) {
    const cartaUsuario3 = comprarCarta();
    cartasUsuario.push(cartaUsuario3.texto);
    const cartaComputador3 = comprarCarta();
    cartasComputador.push(cartaComputador3.texto);
    pontuacaoUsuario += cartaUsuario3.valor;
    pontuacaoComputador += cartaComputador3.valor;
    if (pontuacaoUsuario > 21) {
      alert(
        "Suas cartas são " +
          cartasUsuario +
          " . Sua pontuação é " +
          pontuacaoUsuario +
          ". O computador ganhou!"
      );
    } else if (pontuacaoComputador > 21) {
      alert(
        "A pontuação do computador foi " +
          pontuacaoComputador +
          "O usuário ganhou!"
      );
    } else if (
      confirm(
        "Suas cartas são " +
          cartasUsuario +
          " . Sua pontuação é " +
          pontuacaoUsuario +
          ". As cartas do computador são " +
          cartasComputador +
          ". A pontuação do computador é " +
          pontuacaoComputador +
          ". Deseja comprar mais uma carta?"
      )
    ) {
      const cartaUsuario4 = comprarCarta();
      cartasUsuario.push(cartaUsuario4.texto);
      const cartaComputador4 = comprarCarta();
      cartasComputador.push(cartaComputador4.texto);
      if (pontuacaoUsuario > 21) {
        alert(
          "Suas cartas são " +
            cartasUsuario +
            " . Sua pontuação é " +
            pontuacaoUsuario +
            ". O computador ganhou!"
        );
      } else if (pontuacaoComputador > 21) {
        alert(
          "Suas cartas são " +
            cartasUsuario +
            " . Sua pontuação é " +
            pontuacaoUsuario +
            ". O usuário ganhou!"
        );
      } else if (pontuacaoUsuario > pontuacaoComputador) {
        alert(
          "Suas cartas são " +
            cartasUsuario +
            " . Sua pontuação é " +
            pontuacaoUsuario +
            ". O usuário ganhou!"
        );
      } else if (pontuacaoUsuario < pontuacaoComputador) {
        alert(
          "Suas cartas são " +
            cartasUsuario +
            " . Sua pontuação é " +
            pontuacaoUsuario +
            ". O computador ganhou!"
        );
      } else {
        alert(
          "Suas cartas são " +
            cartasUsuario +
            " . Sua pontuação é " +
            pontuacaoUsuario +
            ". O jogo terminou em empate!"
        );
      }
    } else {
      alert(
        "Suas cartas são " +
          cartasUsuario +
          " . Sua pontuação é " +
          pontuacaoUsuario +
          ". As cartas do computador são " +
          cartasComputador +
          ". A pontuação do computador é " +
          pontuacaoComputador +
          vencedor()
      );
    }
  } else {
    alert(
      "Suas cartas são " +
        cartasUsuario +
        " . Sua pontuação é " +
        pontuacaoUsuario +
        ". As cartas do computador são " +
        cartasComputador +
        ". A pontuação do computador é " +
        pontuacaoComputador +
        vencedor()
    );
  }
}

jogar();
