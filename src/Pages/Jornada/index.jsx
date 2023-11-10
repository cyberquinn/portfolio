import Header from '../../Header';
import Footer from '../../footer'; 

function Jornada(){
return(

    <>
    <Header/>
    
<main>


<div className='minha_jornada'>
    <p> Apresento um fluxograma que destaca algumas das etapas que contribuíram para a minha formação e me conduziram até o ponto em que estou hoje. </p>
</div>


<div class="fluxograma">
        <div className="linha"></div>

        <div className="item_jornada">
            <h1 className='h1_jornada'>2023 - 2024</h1>
            <div className="circulo"></div>
            <p className='p_jornada'>Formação Acelerada em Programação - Front-end <br /> Softex Recife</p>
        </div>
        <div class="item_jornada">
            <h1 className='h1_jornada'>2023 - 2023</h1>
            <div className="circulo"></div>
            <p className='p_jornada'>FAST - Formação Acelerada em Soluções de TechDesign <br /> CESAR School </p>
        </div>
        <div class="item_jornada">
            <h1 className='h1_jornada'>2021 - 2022</h1>
            <div className="circulo"></div>
            <p className='p_jornada'>Curso Programação Web <br /> Senac</p>
        </div>
        <div class="item_jornada">
            <h1 className='h1_jornada'>2021 - 2021</h1>
            <div className="circulo"></div>
            <p className='p_jornada'>Suporte através de ChatBot <br /> Bagy</p>
        </div>
        <div class="item_jornada">
            <h1 className='h1_jornada'>2017 - 2020</h1>
            <div className="circulo"></div>
            <p className='p_jornada'>Mestrado em Psicologia <br /> Universidade Católica de Pernambuco</p>
        </div>
        <div class="item_jornada">
            <h1 className='h1_jornada'>2012 - 2016</h1>
            <div className="circulo"></div>
            <p className='p_jornada'>Graduação em Psicologia <br /> Universidade Católica de Pernambuco</p>
        </div>
        
    </div>
</main>


        <Footer/>
    </>
)

}

export default Jornada;