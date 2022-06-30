import React from 'react';
import styles from './Footer.module.css';

class Footer extends React.Component{
  render() {
    return (
      <footer className={styles.rodape}>
        <p> &copy; Loja de Informática do Alves - Todos os direitos reservados </p>
      </footer>
    );
  }
}

export default Footer;