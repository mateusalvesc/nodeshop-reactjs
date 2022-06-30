import React from 'react';
import styles from './Contact.module.css';

class Contact extends React.Component {
  render() {
    return (
      <section id='contatos' className={styles.section}>
        <h2>Redes Sociais</h2>
        <div className={styles.container}>
          <div className={styles.item}>
            <a className={styles.btn_facebook} href='facebook.com'><i className='fab fa-facebook'></i></a>
          </div>
          <div className={styles.item}>
            <a className={styles.btn_twitter} href='twitter.com'><i className='fab fa-twitter'></i></a>
          </div>
          <div className={styles.item}>
            <a className={styles.btn_instagram} href='instagram.com'><i className='fab fa-instagram'></i></a>
          </div>
          <div className={styles.item}>
            <a className={styles.btn_youtube} href='youtube.com'><i className='fab fa-youtube'></i></a>
          </div>
        </div>
      </section>
    );
  }
}


export default Contact;