// pages/index.js
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>onglet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="SITE" />
      
      <main>
        <section id="about">
          <div className="container">
            <h2>À propos de moi</h2>
            <p>Bienvenue sur mon portfolio. Je suis Ingénieur Système avec une solide expérience en administration de systèmes, gestion de réseaux et développement de scripts d'automatisation.</p>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <h2>Compétences</h2>
            <ul>
              <li>Administration de systèmes Linux/Windows</li>
              <li>Gestion des réseaux</li>
              <li>Virtualisation et conteneurisation (Docker, VMware)</li>
              <li>Scripting (Bash, Python)</li>
              <li>Sécurité des systèmes</li>
            </ul>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <h2>Projets</h2>
            <div className="project">
              <h3>Projet 1</h3>
              <p>Description du projet 1.</p>
            </div>
            <div className="project">
              <h3>Projet 2</h3>
              <p>Description du projet 2.</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2>Contact</h2>
            <p>Vous pouvez me contacter à l'adresse suivante : <a href="mailto:votre.email@example.com">votre.email@example.com</a></p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
