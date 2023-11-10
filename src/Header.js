import React, { useEffect } from 'react'; // Importe o React
import { Link } from "react-router-dom";
import {MdBrightnessMedium} from "react-icons/md"




function dark(){
   // Obtém uma referência ao elemento <body> do documento
const darkmode = document.body;

   // Alterna a classe 'darkMode' no elemento <body>. 
   // Se 'darkMode' estiver presente, ele será removido; se não estiver, será adicionado.
darkmode.classList.toggle('darkMode');

   // Verifica se o elemento <body> contém a classe 'darkMode'
if (darkmode.classList.contains('darkMode')) {
     // Se a classe 'darkMode' estiver presente, define o item 'theme' no localStorage como 'dark'
    localStorage.setItem('tema', 'dark');
} else {
     // Se a classe 'darkMode' não estiver presente, define o item 'theme' no localStorage como 'light'
    localStorage.setItem('tema', 'light');

}
}

function Header() {

    useEffect(() => {
// Quando o componente é montado, verifique a preferência no localStorage
        const temaAtual = localStorage.getItem('tema');
        if (temaAtual === 'dark') {
        document.body.classList.add('darkMode');
        } else {
        document.body.classList.remove('darkMode');
        }
        
    }, []);

    return (
        <header className='dark'>
            <nav className="navbar">
                <div className="container-header">

                    <Link to="/Home">  <span className="navbar-brand mb-0 h1">Portfólio</span>    </Link>
                    
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Sobre">Sobre</Link>
                        </li>
                        <li>
                        <Link to="/Jornada">Jornada</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/Habilidades">Habilidades</Link>
                        
                        </li>
                        <li className="nav-item">
                        <Link to="/Contato">Contato</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/ProjetoDia">Projeto D.I.A</Link>
                        </li>
                        <li className="li-mini">
                            <a href="#">Mini projetos</a>
                            <ul>
                                <li><Link to="/Calculadora">Calculadora</Link></li>
                                <li><Link to="/Login">Login</Link></li>
                                
                            </ul>
                        </li>
                        <button className="btndark" alt="" onClick={dark}>
                        <MdBrightnessMedium/>
                        </button>
                
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
