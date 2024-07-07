import { Fragment } from 'react/jsx-runtime';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Navbar } from './components/Navbar';
import { Pricing } from './components/Pricing';
import { ScrollToTop } from './components/ScrollToTop';
import { UseCases } from './components/UseCases';
import { Testimonials } from './components/Testimonials';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}

export default App;
