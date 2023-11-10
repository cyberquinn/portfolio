import Header from '../../Header';
import Footer from '../../footer'; 

function Habilidades(){
    return(
    
        <>
        <Header/>
        
        <main>

<div class="containerhabilidades">
    
    <div class="nome">
        <div class="nome_centralizado"> <p>HTML</p> </div>
        
    </div>

    <div class="valor">
        <div class="valor_estilo_HTML" title="80%"> <p>80%</p> </div>
    </div>         
    
    <div class="nome">
        <div class="nome_centralizado"> <p>CSS</p> </div>
    </div>

    <div class="valor">
        <div class="valor_estilo_CSS" title="60%"> <p>60%</p> </div>
    </div>         

    <div class="nome">
        <div class="nome_centralizado"> <p>JavaScript</p> </div>
    </div>

    <div class="valor">
        <div class="valor_estilo_JS" title="50%"> <p>50%</p> </div>
    </div>    

    <div class="nome">
        <div class="nome_centralizado"> <p>Bootstrap</p> </div>
    </div>

    <div class="valor">
        <div class="valor_estilo_BT" title="70%"> <p>70%</p> </div>
    </div>    

    <div class="nome">
        <div class="nome_centralizado"> <p>React</p> </div>
    </div>

    <div class="valor">
        <div class="valor_estilo_React" title="40%"> <p>40%</p> </div>
    </div>    

    <div class="nome">
        <div class="nome_centralizado"> <p>UX/UI</p> </div>
    </div>

    <div class="valor">
        <div class="valor_estilo_UXUI" title="80%"> <p>80%</p> </div>
    </div> 

</div>


</main>
            <Footer/>
        </>
    )
    
    }
    
    export default Habilidades;