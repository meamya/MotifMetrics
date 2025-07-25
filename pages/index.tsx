import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Collaborate from '../components/Collaborate';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function Home() {
  return (
    <>
      <Head>
        <title>Motif Metrics</title>
        <meta name="description" content="Wellness tech rooted in rhythm, recovery, and emotional clarity." />
      </Head>

      <main className="bg-cream text-charcoal font-light scroll-smooth">
        <Navbar />
        <Hero />
        <Projects />
        <Collaborate />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
