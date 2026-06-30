import ScrollReveal from '@/components/base/ScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuDetail from './components/MenuDetail';
import Information from './components/Information';
import Access from './components/Access';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';


export default function Home() {
  return (
    <main>
      <Navbar />
      <BackToTop />
      <ScrollReveal delay={100}>
      <Hero />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <MenuDetail />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Information />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Access />
      </ScrollReveal>
        <Contact />
        <Footer />
     
    </main>
  );
}