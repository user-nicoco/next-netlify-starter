import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>MonPortfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="flex-1">
        <section id="about" className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-4">À propos de moi</h2>
            <p>Bienvenue sur mon portfolio. 
            <br /> <br />
            Je suis Ingénieur Système avec une expérience dans l'administration de systèmes, gestion de réseaux et développement de scripts d'automatisation. </p>
          </div>
        </section>

        <section id="skills" className="py-12 bg-gray-900 text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-semibold mb-8 text-center">Compétences</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="skill" data-aos="fade-up">
        <h3 className="text-2xl font-bold mb-2">Administration de systèmes</h3>
        <p className="text-gray-400 mb-2">Linux et Windows</p>
        <div className="progress-bar bg-gray-800 rounded-full overflow-hidden">
          <div className="progress bg-green-500 h-4 rounded-full" style="width: 90%;"></div>
        </div>
      </div>
      <div className="skill" data-aos="fade-up" data-aos-delay="100">
        <h3 className="text-2xl font-bold mb-2">Gestion des réseaux</h3>
        <p className="text-gray-400 mb-2">Configuration et maintenance</p>
        <div className="progress-bar bg-gray-800 rounded-full overflow-hidden">
          <div className="progress bg-green-500 h-4 rounded-full" style="width: 85%;"></div>
        </div>
      </div>
      <div className="skill" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-2xl font-bold mb-2">Virtualisation et conteneurisation</h3>
        <p className="text-gray-400 mb-2">Docker, VMware</p>
        <div className="progress-bar bg-gray-800 rounded-full overflow-hidden">
          <div className="progress bg-green-500 h-4 rounded-full" style="width: 80%;"></div>
        </div>
      </div>
      <div className="skill" data-aos="fade-up" data-aos-delay="300">
        <h3 className="text-2xl font-bold mb-2">Scripting</h3>
        <p className="text-gray-400 mb-2">Bash, YAML</p>
        <div className="progress-bar bg-gray-800 rounded-full overflow-hidden">
          <div className="progress bg-green-500 h-4 rounded-full" style="width: 75%;"></div>
        </div>
      </div>
      <div className="skill" data-aos="fade-up" data-aos-delay="400">
        <h3 className="text-2xl font-bold mb-2">Sécurité des systèmes</h3>
        <p className="text-gray-400 mb-2">Protection et surveillance</p>
        <div className="progress-bar bg-gray-800 rounded-full overflow-hidden">
          <div className="progress bg-green-500 h-4 rounded-full" style="width: 85%;"></div>
        </div>
      </div>
    </div>
  </div>
</section>


        <section id="projects" className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-4">Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Projet 1</h3>
                <p>Description du projet 1.</p>
              </div>
              <div className="p-4 bg-white rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Projet 2</h3>
                <p>Description du projet 2.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-4">Contact</h2>
            <p>Vous pouvez me contacter à l'adresse suivante : <a href="mailto:votre.email@example.com" className="text-blue-600 hover:underline">macbook.nicolas.barros@gmail.com</a></p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
