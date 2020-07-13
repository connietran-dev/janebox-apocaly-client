import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="About">
      <h2>A b o u t<span>t h i s</span><span>P r o j e c t</span></h2>
      <div className="descrip">This project is a multiplayer, storyline game that asks players to
      work together and defeat a viral (totally-not-the-coronavirus) enemy and
      save the world!  The project utilizes React and Socket.IO, alongside
      React Router, Sass, and Express.</div>

      <div>
        <ul><h4>Code Source:</h4>
          <li>
            <a href="https://github.com/connietran-dev/janebox-surviral-client" target="_blank" rel="noopener noreferer">Client Repo</a>
          </li>
          <li>
            <a href="https://github.com/connietran-dev/janebox-surviral-server" target="_blank" rel="noopener noreferer">Server Repo</a>
          </li>
        </ul>
        <ul><h4>Contributors:</h4>
          <li>
            <a href="https://www.linkedin.com/in/samantha-sexton/" target="_blank" rel="noopener noreferer">Samantha Sexton</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/connietran1/" target="_blank" rel="noopener noreferer">Connie Tran</a>
          </li>
        </ul>
      </div>

      <div>
        <h5>
          This project was built in a <a href="https://sites.google.com/mintbean.io/2020-07-10-multiplayer-hackath/home?authuser=2" target="_blank" rel="noopener noreferer">multi-day hackathon</a> hosted by <a className="mintbean" href="https://www.mintbean.io/" target="_blank" rel="noopener noreferer">Mint<span>bean</span></a>
        </h5>
      </div>
      <Link className="home-link" to="/">G o<br/><span>H o m e</span></Link>
    </section>
  )
}

export default Home
