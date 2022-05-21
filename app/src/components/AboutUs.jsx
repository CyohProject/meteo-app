import githubIcon from '../assets/githubLogo.png'

/**
 * @todo Añadir links de APIs y/o las cosas más importantes que hayamos usado en el footer
 * @todo Style
 *
 * @return Container with info about ourselves and the project. Footer with important links
 */

export default function AboutUs () {
  return (
    <>
      <div id='containerAboutUs'>
        <h1>About us</h1>
        <p>This is a project for the end of superior grade studies in <i>Institut de Badia del Vallès.</i></p>
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
