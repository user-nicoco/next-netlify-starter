import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
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

        <section id="skills" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-4">Compétences</h2>
            <ul className="list-disc pl-6">
              <li>Administration de systèmes de type Linux et Windows</li>
              <li>Gestion des réseaux</li>
              <li>Virtualisation et conteneurisation (Docker, VMware)</li>
              <li>Scripting (Bash, YAML)</li>
              <li>Sécurité des systèmes</li>
            </ul>
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
