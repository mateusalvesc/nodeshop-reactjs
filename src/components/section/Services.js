import React from 'react';
import './Products.css';

class Services extends React.Component {
  render() {
    return (
      <section id='servicos'>
        <h2 className='titulo-produto'>Serviços</h2>
        <div className='container'>
          <div className='card card-1'>
            <div className='card-header'>
              <img className='card-img' src='https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Ventilador novo para computador' />
            </div>

            <div className='card-body'>
              <h3 className='card-categoria'>Diversidade</h3>
              <h2 className='card-titulo'>Venda</h2>
              <p className='card-texto'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className='card-footer' role='button'>
              <a href='#'>Saiba Mais</a>
            </div>
          </div>

          <div className='card card-2'>

            <div className='card-header'>
              <img className='card-img' src='https://images.pexels.com/photos/4792727/pexels-photo-4792727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Troca de peça de hardware de um computador' />
            </div>

            <div className='card-body'>
              <h3 className='card-categoria'>Variedade</h3>
              <h2 className='card-titulo'>Troca</h2>
              <p className='card-texto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className='card-footer' role='button'>
              <a href='#'>Saiba Mais</a>
            </div>

          </div>

          <div className='card card-3'>

            <div className='card-header'>
              <img className='card-img' src='https://images.pexels.com/photos/7639370/pexels-photo-7639370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Manutenção na parte de hardware de um computador' />
            </div>

            <div className='card-body'>
              <h3 className='card-categoria'>Multiplicidade</h3>
              <h2 className='card-titulo'>Manutenção</h2>
              <p className='card-texto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className='card-footer' role='button'>
              <a href='#'>Saiba mais</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;