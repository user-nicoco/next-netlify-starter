import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    
    <div className="container">
      <Head>
        <title>onglet</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="styles.css">

      </Head>

      <main>
    
        <Header title="SITE" />
        <p className="description">
          va voir la <code>pages/index.js</code>
        </p>
  
   
<body>
    <header>
        <div class="container">
            <h1>Votre Nom</h1>
            <p>Ingénieur Système</p>
            <nav>
                <ul>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#skills">Compétences</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="about">
        <div class="container">
            <h2>À propos de moi</h2>
            <p>Bienvenue sur mon portfolio. Je suis Ingénieur Système avec une solide expérience en administration de systèmes, gestion de réseaux et développement de scripts d'automatisation.</p>
        </div>
    </section>

    <section id="skills">
        <div class="container">
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
        <div class="container">
            <h2>Projets</h2>
            <div class="project">
                <h3>Projet 1</h3>
                <p>Description du projet 1.</p>
            </div>
            <div class="project">
                <h3>Projet 2</h3>
                <p>Description du projet 2.</p>
            </div>
            <!-- Ajoutez plus de projets si nécessaire -->
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2>Contact</h2>
            <p>Vous pouvez me contacter à l'adresse suivante : <a href="mailto:votre.email@example.com">votre.email@example.com</a></p>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2024 Votre Nom. Tous droits réservés.</p>
        </div>
    </footer>
</body>


      </main>

      <Footer />
    </div>
  )
}
