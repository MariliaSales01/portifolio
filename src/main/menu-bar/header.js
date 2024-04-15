import './header.css'

export default function Header() {
    var logo = '<Marilia/>'
    return(
        <header>
            <div className='interface'>
                <div className='logo'>
                   <a href='#'>{logo}</a> 
                </div>

                <nav  className='menu'>
                    <ul>
                    <li><a href='#'>Início</a></li>
                        <li><a href='#'>Especialidades</a></li>
                        <li><a href='#'>Projetos</a></li>
                        <li><a href='#'>Sobre</a></li>
                    </ul>
                </nav>

                <div className='btn-contato '>
                <a href='#'><button>Contato</button></a>                 
                </div>

                
            </div>         
        </header>
    )
}