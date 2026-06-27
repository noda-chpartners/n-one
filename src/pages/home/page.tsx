import ScrollReveal from '@/components/base/ScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import MenuDetail from './components/MenuDetail';
import Information from './components/Information';
import Testimonials from './components/Testimonials';
import Access from './components/Access';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollReveal delay={100}>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <Services />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <MenuDetail />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Information />
      </ScrollReveal>
      <ScrollReveal delay={150}>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Access />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Contact />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Footer />
      </ScrollReveal>
    </main>
  );
}