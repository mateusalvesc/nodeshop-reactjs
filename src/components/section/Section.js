import React from 'react';
import styles from './Section.module.css';

class Section extends React.Component{
  render() {
    return (
      <section className={styles.newsletter}>
        <h3>Newsletter</h3>
        <p>Receba nossas promoções por email</p>
        <form>
          <input type='text' name='' id='' placeholder='Seu nome' />
          <input type='email' name='' id='' placeholder='Seu email' />
          <button> Cadastrar </button>
        </form>
      </section>
    );
  }
}

export default Section;