import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Products from './components/section/Products';
import Services from './components/section/Services';
import Section from './components/section/Section';
import Contact from './components/contacts/Contact';
import Footer from './components/footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Nav />
        <Main />
        <Products />
        <Services />
        <Contact />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;