import githubIcon from '../assets/githubLogo.png'
import openweatherIcon from '../assets/openweatherLogo.png'
import windyIcon from '../assets/windyLogo.png'
import mongodbIcon from '../assets/mongodbLogo.png'
import herokuIcon from '../assets/herokuLogo.png'
const { Grid } = require('@mui/material')

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
        <section>
          <h1>About us</h1>
          <p id='firstSection'>
            This is a project for the end of superior grade studies in <i>Institut de Badia del Vallès.</i>
          </p>
          <p id='secondSection'>
            This application informs and shows all kinds of useful weather information about
            the users location or other locations that they establish. Among that information: daily,
            hourly and weather alerts.
          </p>
          <p id='thirdSection'>
            The application is internationalized in 3 languages and it can be visualized via the
            web on a variety of devices.

            Theres interaction between users via comments and filtered by community/state.
          </p>
          <br />
        </section>
      </div>
      <footer>
        <Grid container>
          <a id='githubIcon' href='https://github.com/CyohProject/meteo-app'><img src={githubIcon} alt='githubIcon' /></a>
          <a id='githubLink' href='https://github.com/CyohProject/meteo-app'>GitHub</a>
        </Grid>
        <Grid container>
          <a id='openweatherIcon' href='https://openweathermap.org/'><img src={openweatherIcon} alt='openweatherIcon' /></a>
          <a id='openweatherLink' href='https://openweathermap.org/'>OpenWeather</a>
        </Grid>
        <Grid container>
          <a id='windyIcon' href='https://www.windy.com/'><img src={windyIcon} alt='windyIcon' /></a>
          <a id='windyLink' href='https://www.windy.com/'>Windy</a>
        </Grid>
        <Grid container>
          <a id='mongodbIcon' href='https://www.mongodb.com/'><img src={mongodbIcon} alt='mongodbIcon' /></a>
          <a id='mongodbLink' href='https://www.mongodb.com/'>MongoDB</a>
        </Grid>
        <Grid container>
          <a id='herokuIcon' href='https://www.heroku.com/'><img src={herokuIcon} alt='herokuIcon' /></a>
          <a id='herokuLink' href='https://www.heroku.com/'>Heroku</a>
        </Grid>
      </footer>
    </>
  )
}
