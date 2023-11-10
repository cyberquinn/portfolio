import Header from '../../Header';
import Footer from '../../footer'; 
import dia from '../../img/dia.png';

function ProjetoDia(){
return(

    <>
    <Header/>
<main>


<div class="container">

            <div class="row">

                <div className='img_dia'>
                    <img src={dia} alt="dia" />
                </div>

                <div class="colunatexto">
            
                    <p>O projeto D.I.A: Digital Innovation Art, ganhou vida em 2022, impulsionado pela
                        audaciosa visão de entrar em um mercado sedento por qualidade em desenvolvimento front-end,
                        UX/UI design, social media e prototipação de apps. Seu propósito é nítido: formalizar e entregar
                        excelentes padrões de serviço nesse nicho em ascensão. A Digital Innovation Art não apenas busca
                        ser uma referência, mas tem a ambição a longo prazo de se tornar uma empresa de médio porte, um
                        verdadeiro catalisador de inovação digital. A jornada está apenas começando, mas os alicerces
                        desse projeto já demonstram  potencial e determinação inabalável para fazer a
                        diferença.</p>
                </div>

            </div>

        </div>

</main>



        <Footer/>
    </>
)

}

export default ProjetoDia;