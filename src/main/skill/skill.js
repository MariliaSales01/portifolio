import './skill.css'

export default function Skill(){
    var skill = '<Habilidades/>'
    return(
        <section className='habilidades'>
            <h1>{skill}</h1>
            <div className='interface'>
                <h2 className='titulo'>MINHAS <span>ESPECILIDADES.</span></h2>
                       <div className='flex'>        
                            <div className='habilidades-box'>
                            <i class="bi bi-code-square"></i>
                            <h3>Web respansivo</h3>
                            <p>Lorem</p>
                            </div>
                       
                            <div className='txt-sobre'>
                    
                    
                </div>

                            <div className='habilidades-box'>
                            <i class="bi bi-clock"></i>
                            <h3>Web respansivo</h3>
                            <p>Lorem</p>
                            </div>

                            <div className='habilidades-box'>
                            <i class="bi bi-chat-right-dots"></i>
                            <h3>Web respansivo</h3>
                            <p>Lorem</p>
                            </div>
                            
                       </div>
            </div>
        </section>
    )
}