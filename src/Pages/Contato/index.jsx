import Header from '../../Header';
import Footer from '../../footer'; 
import GitHub from '../../img/GitHub.png';
import Instagram from '../../img/Instagram.png';
import Linkedin from '../../img/Linkedin.png';
import QRcode_3 from '../../img/QRcode_3.png';

function Contato(){
return(

    <>
    <Header/>
    
    <main>

<div class="container_contato">

    <div>
        <div class="contatos">
            <ul>
                <li><img src={Linkedin} alt="linkedin"/><a href="https://www.linkedin.com/in/laura-arruda-recife/" target="_blank"> Linkedin</a></li>
                <li><img src={GitHub} alt="GitHub"/> <a href="https://github.com/laus-arruda" target="_blank"> GitHub</a></li>
                <li><img src={Instagram} alt="Instagram"/><a href="https://instagram.com/dia.digitalinnovationart?igshid=MzRlODBiNWFlZA==" target="_blank"> Instagram</a></li>
            </ul>
        <div class="imgcontatos">
            <img src={QRcode_3} alt="ellipse"/>
        
        </div>


        </div>

    </div>

</div>

</main>

        <Footer/>
    </>
)

}

export default Contato;