import './portfolio.css'
import img from '../../assets/foto.png'

export default function Portfolio(){
    var texto = '</Portfolio>'
    return(
        <section className='portfolio' id='portfolio'>
            <h1>{texto}</h1>

            <div className='portfolio-container'>
                <div className='portfolio-box'>
                        <img src={img}></img>
                    <div className='portifolio-layer'>
                        <h4>Quiz</h4>
                        <p>lorem</p>
                        <i class="fa-solid fa-up-right-from-square"></i>
                    </div>
                </div>

                <div className='portfolio-box'>
                        <img src={img}></img>
                    <div className='portifolio-layer'>
                        <h4>Quiz</h4>
                        <p>lorem</p>
                        <i class="fa-solid fa-up-right-from-square"></i>
                    </div>
                </div>

                <div className='portfolio-box'>
                    <img src={img}></img>
                    <div className='portifolio-layer'>
                        <h4>Quiz</h4>
                        <p>lorem</p>
                        <i class="fa-solid fa-up-right-from-square"></i>
                    </div>
                </div>

                <div className='portfolio-box'>
                    <img src={img}></img>
                    <div className='portifolio-layer'>
                        <h4>Quiz</h4>
                        <p>lorem</p>
                        <i class="fa-solid fa-up-right-from-square"></i>
                    </div>
                </div>


                <div className='portfolio-box'>
                    <img src={img}></img>
                    <div className='portifolio-layer'>
                        <h4>Quiz</h4>
                        <p>lorem</p>
                        <i class="fa-solid fa-up-right-from-square"></i>
                    </div>
                </div>

                <div className='portfolio-box'>
                    <img src={img}></img>
                    <div className='portifolio-layer'>
                        <h4>Quiz</h4>
                        <p>lorem</p>
                        <i class="fa-solid fa-up-right-from-square"></i>
                    </div>
                </div>


            </div>
        </section>
    )
}