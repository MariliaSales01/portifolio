import './contato.css'

export default function Contato(){
    var texto = '</Contato>'
    return(
        <section className='formulario'>
            <h1>{texto}</h1>
            <div className='interface'>
                <h2 className='titulo'>FALA <span>COMIGO.</span></h2>

                <form action=''>
                    <input type='text' name='' id='' placeholder='Seu nome:' required></input>
                    <input type='email' name='' id='' placeholder='Seu e-mail:' required></input>
                    <input type='email' name='' id='' placeholder='Seu celular:'></input>
                    <textarea name='' id='' placeholder='Sua mensagem:' required></textarea>

                    <div className='btn-enviar'>
                        <input type='submit' value='ENVIAR'></input>
                    </div>
                </form>
            </div>
            </section>
    )
}