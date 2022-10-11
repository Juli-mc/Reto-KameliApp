import { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=4")
      .then((res) => setCharacters(res.data.results));
  }, []);

  const getUsers = () => {
    axios
      .get("https://randomuser.me/api/?results=4")
      .then((res) => setCharacters(res.data.results));
  };

  console.log(characters);

  return (
    <div>
        <div id="wrapper">
          <div id="container">
            <h1>Reto KameliApp</h1>
            <h2>Made by Julian Marin</h2>
            <p>
              <small>
                With free CSS code
              </small>
            </p>
          </div>
        </div>
        <br />
        <div className="characters">
          {characters.map((character) => (
            <motion.div whileHover={{ scale: 1.1 }} whileInView={{ opacity: [0, 1] }} className="boxx" key={character?.picture.large}>
              <img src={character?.picture.large}  /> 
              <h4>
                {character?.name.title} {character?.name.first}{" "}
                {character?.name.last}
              </h4>
              <p><i class="fa-solid fa-location-dot"></i> {character?.location.country}, {character?.location.state}</p>
              <p><i class="fa-solid fa-phone"></i> {character?.phone}</p>
                
            </motion.div>
          ))}
        </div>
        <br />

      <div ontouchstart="">
      <div className="switch">
        <a onClick={getUsers} href="#"><i class="fa-sharp fa-solid fa-repeat"></i></a>
      </div>
      </div>
      <footer>
      <div className='social-icon-container'>
        <b href="https://instagram.com/juli.marinc/"><i class="fa-brands fa-instagram" style={{cursor: "pointer"}}></i></b>
        <b href="https://github.com/Juli-mc"><i class="fa-brands fa-github" style={{cursor: "pointer"}}></i></b>
        <b href="mailto:julianmarincordoba19@gmail.com"><i class="fa-solid fa-envelope" style={{cursor: "pointer"}}></i></b>
      </div>
      <h5 className='copyright'>&copy;2022, Julián Marin. Todos los derechos reservados.</h5>
    </footer>
    </div>
  );
}

export default App;
