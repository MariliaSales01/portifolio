import './header.css'

export default function Header() {
    var logo = '<Marilia/>'

    return(
        <header>
            <div className='interface'>
                <div className='logo'>
                   <a href='#topoSite'>{logo}</a> 
                </div>

                <nav  className='menu-desktop'>
                    <ul>
                        <li><a href='#sobre'>Sobre</a></li>
                        <li><a href='#habilidades'>Especialidades</a></li>
                        <li><a href='#portfolio'>Projetos</a></li>
                        <li><a href='#tecnologia'>Tecnologias</a></li>
                    </ul>
                </nav>

                <div className='btn-contato'>
                    <a href='#contato'><button>Contato</button></a>                 
                </div>

            </div>         
        </header>
    )
}