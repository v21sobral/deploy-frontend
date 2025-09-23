// src\pages\Servicos\index.jsx
import './style.css'
import qrcodeImg from '../../assets/qrcode.png'; 

function Servicos() {
    return (
        <section className='servicos'>
            <h1>Serviços de gestão de entregas</h1>
            <p>Comodidade e segurança na palma da mão</p>
            
            <div className='qrcode-section'>
                <img src={qrcodeImg} alt="QR Code para entregas" />
                <div className='qrcode-text'>
                    <p>
                        Contamos com a tecnologia de QR Code para facilitar o seu dia-a-dia, 
                        dando mais segurança e rapidez nas suas entregas. A tecnologia de QR Code 
                        já faz parte do nosso dia-a-dia e integrada ao serviço de entregas tudo fica mais fácil.
                    </p>
                </div>
            </div>
            
            <div className='grid cols-3'>
                <div className='card'>
                    <h3>Cadastro de vendedores</h3>
                    <p>Aqui você pode oferecer seus serviços a outros condomínios de forma fácil e ágil.</p>
                </div>
                <div className='card'>
                    <h3>Controle de entregas</h3>
                    <p>Sabendo quem vai te entregar e quando, a sua segurança ganha um alto nível de proteção.</p>
                </div>
                <div className='card'>
                    <h3>Sem contratempos</h3>
                    <p>Evite contratempos com nosso sistema de gestão de entregas, que garante a segurança e a confiança de nossos clientes.</p>
                </div>
            </div>
        </section>
    )
}

export default Servicos