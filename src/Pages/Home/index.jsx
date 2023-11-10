import Header from "../../Header"
import foto_portfolio_1 from "../../img/foto_portfolio_1.png";

function Home(){
    return(
        

        <>
        <Header/>
        
        <main>
            <div class="container">
                <div class="conteudo">
                    <h2 class="ola">
                        Olá <br />
                        eu sou Laura Valença Arruda
                    </h2>
                    <h2 class="dev">
                        Desenvolvedora Front-end e <br />
                        UX/UI Designer
                    </h2>
                    <p class="paragrafo">
                        Trabalho para que suas ideias e sonhos <br />
                        se tornem realidade
                    </p>
                </div>
                <div class="imagem_1">
                    <img src={foto_portfolio_1} alt="Foto de perfil" title="Foto de perfil" className="img_portfolio" />
                </div>
            </div>

        </main>
        
        </>

    )
}

export default Home 