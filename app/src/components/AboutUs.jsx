import '../styles/AboutUs.css'
import githubIcon from '../assets/githubLogo.png'

/** TODO
 * Añadir links de APIs y/o las cosas más
 * importantes que hayamos usado en el footer
 * Style
 */

export default function AboutUs () {
  return (
    <>
      <div id='containerAboutUs'>
        <h1>Sobre Nosotros</h1>
        <p>Este es un proyecto de fin de estudios de Grado Superior en el IES Badia.</p>
      </div>
      <footer>
        <a id='githubIcon' href='https://github.com/CyohProject/meteo-app'><img src={githubIcon} alt='githubIcon' /></a>
        <a id='githubLink' href='https://github.com/CyohProject/meteo-app'>GitHub</a>
        {/* <div id='footerText'>
          <p>Lorenzo García</p>
          <p>Oriol Salvador</p>
          <p>Jose María Molero</p>
        </div> */}
      </footer>
    </>
  )
}
