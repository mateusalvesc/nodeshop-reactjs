import React from 'react';
import './Products.css';


class Products extends React.Component {
  render() {
    return (
      <section id='produtos'>
        <h2 className='titulo-produto'>Produtos</h2>
        <div className='container'>
          <div className='card card-1'>
            <div className='card-header'>
              <img className='card-img' src='https://images.pexels.com/photos/3693732/pexels-photo-3693732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Notebook' />
            </div>

            <div className='card-body'>
              <h3 className='card-categoria'>Aparelho</h3>
              <h2 className='card-titulo'>Notebook</h2>
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
              <img className='card-img' src='https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Teclado de computador' />
            </div>

            <div className='card-body'>
              <h3 className='card-categoria'>Periférico</h3>
              <h2 className='card-titulo'>Teclado</h2>
              <p className='card-texto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <div className='card-footer' role='button'>
              <a href='#'>Saiba Mais</a>
            </div>

          </div>

          <div className='card card-3'>

            <div className='card-header'>
              <img className='card-img' src='https://images.pexels.com/photos/4316/technology-computer-chips-gigabyte.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Peça de computador' />
            </div>

            <div className='card-body'>
              <h3 className='card-categoria'>Hardware</h3>
              <h2 className='card-titulo'>Placa Mãe</h2>
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

export default Products;