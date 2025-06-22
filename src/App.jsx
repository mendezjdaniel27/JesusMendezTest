import { useEffect, useState } from "react";
import './assets/Tooltip.css'; // Importa este CSS manualmente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke, faDatabase, faServer, faPalette, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faGithub, faLinkedin,
         faGitAlt, faDocker, faAngular, faPython, faPhp, faLaravel, faVuejs, faWordpress } from '@fortawesome/free-brands-svg-icons';
import FullstackDevImg from '/img/fullstack.png';


export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-500">
      <header className="flex justify-between items-center p-6 border-b border-gray-400 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-green-700 dark:text-green-400">
          Portafolio
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hover:scale-110 transition-transform duration-100 px-4 py-2 border-green-500 dark:border-green-900 rounded-md border-2 dark:bg-green-200 dark:text-black text-green-400 bg-gray-900 hover:bg-green-800 dark:hover:bg-green-300"
        >
       <FontAwesomeIcon icon={faCircleHalfStroke} className="dark:text-black text-green-400" />
        {darkMode ? " Claro" : " Oscuro"}
        </button>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto p-6 space-y-20">
        
        {/* Sobre mí */}
        <section id="about" className="animate-fadeInUp">
          <div className="flex flex-col  md:flex-row-reverse items-center md:items-start gap-5">            
            <img
              src={FullstackDevImg}
              alt="Fullstack Developer"
              className="w-64 md:w-80 lg:w-96 md:mt-8 lg:mt-0 rounded-lg shadow-lg"
            />

            {/* Texto de presentación */}
            <div>
              <h2 className="text-5xl font-bold md:mt-0 pt-5 text-green-700 dark:text-green-400">
                Hola, soy Jesús Méndez
              </h2>

              <p className="dark:text-gray-500 mt-2 text-gray-800 leading-relaxed text-xl max-w-prose">
                ~Ingeniero en Informática.
              </p>

              <p className="dark:text-gray-300 mt-5 text-gray-800 leading-relaxed text-lg max-w-prose">
                Desarrollador Fullstack apasionado por crear soluciones web modernas, escalables y centradas en la experiencia del usuario. Me enfoco en mantener buenas prácticas de desarrollo, código limpio y aplicar principios de seguridad y diseño responsivo. Siempre estoy en constante aprendizaje, explorando nuevas tecnologías para seguir creciendo como profesional.
              </p>
            </div>
          </div>
        </section>

      {/* Stack tecnologico */}
      <section id="stack" className="animate-fadeInUp delay-200">
        <h2 className="text-4xl font-bold mb-8 text-green-700 dark:text-green-400">Stack Tecnológico</h2>
        
        <span className="relative group cursor-pointer" data-tooltip="HTML5">
          <FontAwesomeIcon icon={faHtml5} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="CSS3">
          <FontAwesomeIcon icon={faCss3Alt} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="JAVASCRIPT / TYPESCRIPT">
          <FontAwesomeIcon icon={faJsSquare} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="ANGULAR">
          <FontAwesomeIcon icon={faAngular} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="REACT">
          <FontAwesomeIcon icon={faReact} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="NODE JS">
          <FontAwesomeIcon icon={faNodeJs} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="PYTHON">
          <FontAwesomeIcon icon={faPython} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="PHP">
          <FontAwesomeIcon icon={faPhp} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="LARAVEL">
          <FontAwesomeIcon icon={faLaravel} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="GIT">
          <FontAwesomeIcon icon={faGitAlt} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="DOCKER">
          <FontAwesomeIcon icon={faDocker} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="VUE JS">
          <FontAwesomeIcon icon={faVuejs} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="WORDPRESS">
          <FontAwesomeIcon icon={faWordpress} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="BOOTSTRAP / TAILWIND CSS">
          <FontAwesomeIcon icon={faPalette} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="MYSQL / POSTGRESQL / MARIA DB">
          <FontAwesomeIcon icon={faDatabase} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>

        <span className="relative group cursor-pointer" data-tooltip="APACHE / NGINX">
          <FontAwesomeIcon icon={faServer} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 hover:animate-bounce cursor-pointer" />
        </span>
        
      </section>

      {/* Proyectos */}

        <section id="projects" className="animate-fadeInUp delay-200">
          <h2 className="text-4xl font-bold mb-8 text-green-700 dark:text-green-400">Proyectos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Proyecto 1"
              description="Aplicación web para gestionar tareas diarias."
              link="#"
            />
            <ProjectCard
              title="Proyecto 2"
              description="Dashboard analítico con gráficos dinámicos y datos en tiempo real."
              link="#"
            />
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Proyecto 3"
              description="Una aplicación web para el control y gestion de documentos, con clave unica y firma digital."
              link="#"
            />
            <ProjectCard
              title="Proyecto 4"
              description="Una pagina web para la gestion de medicamentos a pacientes "
              link="#"
            />
          </div>

        </section>

        {/* Contacto */}
        <section id="contact" className="text-center animate-fadeInUp delay-400">
          <h2 className="text-4xl font-bold mb-4 text-green-700 dark:text-green-400">Contacto</h2>

          <span className="relative group cursor-pointer" data-tooltip="mendezjdaniel27@gmail.com">
            <a href="mailto:mendezjdaniel27@gmail.com" className="text-green-700 underline hover:text-green-500" >
              <FontAwesomeIcon icon={faEnvelope} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </a>
          </span>

          <span className="relative group cursor-pointer" data-tooltip="LinkedIn: jesus-mendez27">
            <a href="https://www.linkedin.com/in/jesus-mendez27" className="text-green-700 underline hover:text-green-500" >
              <FontAwesomeIcon icon={faLinkedin} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </a>
          </span>

          <span className="relative group cursor-pointer" data-tooltip="GitHub: mendezjdaniel27">
            <a href="https://github.com/mendezjdaniel27" className="text-green-700 underline hover:text-green-500" >
              <FontAwesomeIcon icon={faGithub} className="m-3 text-green-900 dark:text-green-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110 cursor-pointer" />
            </a>
          </span>


        
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 dark:text-gray-400 py-6 border-t border-gray-400 dark:border-gray-700">
        © 2025 Jesus Mendez. Todos los derechos reservados.
      </footer>

      {/* Animaciones */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.7s ease forwards;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-400 {
            animation-delay: 0.4s;
          }
        `}
      </style>
    </div>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-lg border border-green-600 hover:border-green-400 transition-colors bg-gray-800 dark:bg-gray-900 hover:bg-gray-700 dark:hover:bg-gray-800 shadow-lg"
    >
      <h3 className="text-2xl font-semibold text-green-300 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </a>
  );
}





/* // src/App.jsx
import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Cambiar clase en <html> para que tailwind reconozca dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans transition-colors duration-500">
      <header className="flex justify-between items-center p-6 border-b border-gray-700">
        <h1 className="text-3xl font-extrabold tracking-wide text-green-400">
          Mi Portafolio
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-20">
    
        <section
          id="about"
          className="animate-fadeInUp"
        >
          <h2 className="text-4xl font-bold mb-4 text-green-400">Sobre mí</h2>
          <p className="text-gray-300 leading-relaxed text-lg max-w-prose">
            Soy un desarrollador Fullstack apasionado por crear aplicaciones web modernas y eficientes. Me encanta trabajar con tecnologías actuales y aprender siempre nuevas herramientas.
          </p>
        </section>

        
        <section
          id="projects"
          className="animate-fadeInUp delay-200"
        >
          <h2 className="text-4xl font-bold mb-8 text-green-400">Proyectos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Proyecto 1"
              description="Una aplicación web para gestionar tareas diarias con React y Firebase."
              link="#"
            />
            <ProjectCard
              title="Proyecto 2"
              description="Dashboard analítico con gráficos dinámicos y datos en tiempo real."
              link="#"
            />
          </div>
        </section>

        
        <section
          id="contact"
          className="animate-fadeInUp delay-400"
        >
          <h2 className="text-4xl font-bold mb-4 text-green-400">Contacto</h2>
          <p className="text-gray-300 text-lg max-w-prose">
            ¿Quieres trabajar conmigo? Escríbeme a:{" "}
            <a
              href="mailto:tu@email.com"
              className="text-green-400 underline hover:text-green-300"
            >
              tu@email.com
            </a>
          </p>
        </section>
      </main>

      <footer className="text-center text-gray-600 dark:text-gray-400 py-6 border-t border-gray-700">
        © 2025 Tu Nombre. Todos los derechos reservados.
      </footer>

      
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.7s ease forwards;
          }
          .animate-fadeInUp.delay-200 {
            animation-delay: 0.2s;
          }
          .animate-fadeInUp.delay-400 {
            animation-delay: 0.4s;
          }
        `}
      </style>
    </div>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-lg border border-green-600 hover:border-green-400 transition-colors bg-gray-800 hover:bg-gray-700 shadow-lg"
    >
      <h3 className="text-2xl font-semibold text-green-300 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </a>
  );
} */