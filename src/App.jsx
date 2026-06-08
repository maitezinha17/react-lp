import s from './App.css'

function App() {


  return (
    <>
      <nav>
        <span className={s.navItems} onclick="navTo('s1')" >
          <img src="../assets/icons/BotaoProdutos.png" alt="Jogo" width="30px" />
          <a className={s.navWords} >Produtos</a>
        </span>
        <span className={s.navItems} onclick="navTo('s2')">
          <img src="../assets/icons/BotaoSobre.png" alt="Carros" width="30px" />
          <a className={s.navWords} >Sobre</a>
        </span>
        <span className={s.navItems} onclick="navTo('s3')">
          <img src="../assets/icons/BotaoVideo.png" alt="Vídeo" width="30px" />
          <a className={s.navWords} >Vídeo</a>
        </span>
        <span className={s.navItems} onclick="navTo('s4')">
          <img src="../assets/icons/BotaoContato.png" alt="Contato" width="30px" />
          <a className={s.navWords} >Contato</a>
        </span>
      </nav>

      <main>
        <section id="s1" className={s.s1}>
          <h1>Bebes  </h1>
          <h2>Eu amo bebes</h2>
        </section>

        <section id="s2">
          <div className={s.s2}>
            <img width="300px" height="auto" src="../assets/imagens/Bebe1.jpg" alt="Bebe 1" />
            <div>
              <h4>Bebe 1</h4>
              <p>Descrição do bebe 1</p>
            </div>
          </div>

          <div className={s.card}>
            <img width="300px" height="auto" src="../assets/imagens/26d3b3e4bffd959f4cd9490be60dc666.jpg" alt="Bebe 2" />
            <div>
              <h4>Bebe 2</h4>
              <p>Descrição do bebe 2</p>
            </div>
          </div>

          <div className={s.card}>
            <img width="300px" height="auto" src="../assets/imagens/169232da292f714cbb74fb1a6fdc5eee.jpg" alt="Bebe 3" />
            <div>
              <h4>Bebe 3</h4>
              <p>Descrição do bebe 3</p>
            </div>
          </div>
        </section>

        <section id={s.s3}>
          <iframe width="560" height="315" className="video" src="https://www.youtube.com/embed/_MtwmmPnEHA?si=igJsk8OtIj5rxPDb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </section>

      </main>
      <footer>
        <a href="https://www.facebook.com" target="_blank">
          <img width="40px" src="../assets/icons/facebook.png" alt="facebook" />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <img width="40px" src="../assets/icons/youtube.png" alt="youtube" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank">
          <img width="40px" src="../assets/icons/whatsapp.png" alt="whatsapp" />
        </a>
      </footer>
    </>
  )
}

export default App
