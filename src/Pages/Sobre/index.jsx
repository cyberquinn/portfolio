import React from 'react'; // Importe o React
import Header from '../../Header';
import Footer from '../../footer';
import um from '../../img/um.png';
import dois from '../../img/dois.png';
import tres from '../../img/tres.png';
import quatro from '../../img/quatro.png';
import foto_portfolio_2 from '../../img/foto_portfolio_2.svg';


function Sobre() {

const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');
        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }
        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
    currentItem = maxItems - 1;
    }
    items.forEach(item => item.classList.remove('currentItem'));

    items[currentItem].scrollIntoView({   
        inline: "center",
        behavior: "smooth",
    });
    items[currentItem].classList.add('currentItem');
});
});


return (
    
    <>
    <Header />

    <main>
        <div className="primeiro container"> 
            <div className="umpoucosobre">
            <h2 className="dev"> Um pouco sobre Laura</h2>
                <div className="foto_2">
                    <img src={foto_portfolio_2} alt="foto_portfolio_2" />
                </div>
            </div>
        </div>

        <div className="textosobre">
            <h5>Desde que me formei em psicologia em 2016, direcionei minha trajetória profissional para o excitante mundo do desenvolvimento front-end, product design e UX/UI. Ao longo desse percurso, adquiri habilidades sólidas em HTML, CSS e JavaScript, e me aprimorei na ferramenta Figma para materializar minhas ideias com maestria. Sou entusiasta da tecnologia, apaixonada por criar templates envolventes para as redes sociais, e meu forte está em impulsionar engajamentos. Além disso, acumulei experiência valiosa em pesquisa, o que aprimora meu entendimento do comportamento humano. Estou aqui para unir psicologia e tecnologia, deixando minha marca nesse mercado!
            </h5>
        </div>

        <div className="segundo container">
            <button className="arrow-left control" aria-label="Previousimage"> &#10092; </button>
            <button className="arrow-right control" aria-label="NextImage">&#10093;</button>

        <div className="gallery-wrapper"> 
            <div className="gallery">
                <img src={um} alt="slide1" className={`item ${currentItem === 0 ? 'currentItem' : ''}`} />
                <img src={dois} alt="slide2" className={`item ${currentItem === 1 ? 'currentItem' : ''}`} />
                <img src={tres} alt="slide3" className={`item ${currentItem === 2 ? 'currentItem' : ''}`} />
                <img src={quatro} alt="slide4" className={`item ${currentItem === 3 ? 'currentItem' : ''}`} />
            </div>
        </div>

        </div>

    </main>

    <Footer />
    </>
    );
}

export default Sobre;