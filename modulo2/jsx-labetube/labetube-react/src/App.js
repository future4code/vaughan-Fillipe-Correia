import home from './home.png'
import fire from './fire.png'
import subscriptions from './subscriptions.png'
import history from './history.png'
import originals from './originals.png'
import logo from './logo.png';
import profile from './profile.png'
import search from './search.png'
import './App.css';

function App() {
  const titulo = "Titulo do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
        <a href="#" className="logo"><img src={logo} alt="logo" className="logo"/></a>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
            <a href="#" className="btn-search"><img src={search} /></a>
            <a href="#" className="btn-profile"><img src={profile} height="48px" /></a>
        </header>

        <main>
            <nav className="menu-vertical">
                
                    <a href="#" className="btn-inicio">Início <img src={home} /></a>
                    <a href="#" className="btn-em-alta">Em alta <img src={fire} /> </a>
                    <a href="#" className="btn-inscricoes">Inscrições <img src={subscriptions} /></a>
                    <a href="#" className="btn-originais">Originais <img src={originals} /></a>
                    <a href="#" className="btn-historico">Histórico <img src={history} /></a>
                
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
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
