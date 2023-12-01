import Footer from "./Footer";
function Main() {
    return (
        <>
            <div className="container">
                <div className="conteudo">
                    <h2 className="ola">
                        Olá <br />
                        eu sou Laura Valença Arruda
                    </h2>
                    <h2 className="dev">
                        Desenvolvedora Front-end e <br />
                        UX/UI Designer
                    </h2>
                    <p className="paragrafo">
                        Trabalho para que suas ideias e sonhos <br />
                        se tornem realidade
                    </p>
                </div>
                <div className="imagem">
                    <img
                        src="img/foto_portflio_1.svg"
                        alt="foto_portflio_1"
                    // style="width: 100%"
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Main;