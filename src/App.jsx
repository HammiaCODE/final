import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const cardsData = [
  {
    id: 1,
    character: "Hook Master",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDW4moOflTB_ngPpSddbklsrerv8QGV63VFXcwM01wPQ&s=10",
    points: "Puntos: 5",
    question:
      "Tienes un codigo que simula una lista del supermercado la cual solo actualizas a veces ¿Qué hook utilizarias para hacerla funcionar y por qué?"
    
  },
  {
    id: 2,
    character: "Spring Guardian",
    image:
      "https://mundootakuve.com/wp-content/uploads/2026/01/D_NQ_NP_2X_695022-MLV104894214879_012026-O-1000x1000.jpg",
    points: "Puntos: 1",
      question:
      "¿Qué es springboot?"
  },
  {
    id: 3,
    character: "Kafka Rider",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Franz_Kafka%2C_1923.jpg/960px-Franz_Kafka%2C_1923.jpg",
    points: "Puntos: 5",
    question:
      "¿Cuales son las 4 APIs de Kafka?"
  },
  {
    id: 4,
    character: "GraphQL Wizard",
    points: "Puntos: 3",
    image:
      "https://media.tenor.com/HD0SITutVi8AAAAM/roxy-lalonde.gif",
    question:
      "¿Cuándo fue que GraphQL fue liberado como Open Source?"
  },
  {
    id: 5,
    character: "Bug Hunter",
    image:
      "https://media.tenor.com/Dpz3YQzLNyYAAAAe/renafly-rena.png",
    points: "Puntos: 3",
      question:
      "Nombra cuales son los errores comunes de la implementación reactiva"
  },
  {
    id: 6,
    character: "The Architect",
    image:
      "https://i.pinimg.com/736x/8a/ea/b1/8aeab1d7a17b675265f6a78b479744fd.jpg",
    points: "Puntos: 1",
      question:
      "¿Cuál es la arquitectura Pub/Sub?"
  },
  {
    id: 7,
    character: "Full Stack Ninja",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_0yzvsxaGy-ZZUchKfID7dXbG7MPV-dhxfRVxWK6gquroO3e2hNGeQ&s=10",
    points: "Puntos: 1",
      question:
      "¿Cuándo es conveniente usar GraphQL?"
  },
  {
    id: 8,
    character: "Listener King",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2fCyT_rcExy7kcLKgYf4iwM79VymA-CDWxI8chzwObYZyHEpZqRUsA7c&s=10",
    points: "Puntos: 3",
      question:
      "¿Cuál es la diferencia entre un modelo tradicional y un modelo reactivo?"
  }
];

function Card({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="card-container"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="card"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* FRONT */}
        <div className="card-face front">
          <img src={card.image} alt={card.character} />
          <h3>{card.character}</h3>
        </div>

        {/* BACK */}
        <div className="card-face back">
          <h3>Pregunta</h3>
          <p>{card.points}</p>
          <p>{card.question}</p>
          
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  return (
    <div className="app">
      <h1>⚔️ Challenge ⚔️</h1>

      <div className="scoreboard">
        <div>
          <h2>Equipo A</h2>
          <h1>{teamA}</h1>

          <button onClick={() => setTeamA(teamA + 1)}>
            +1 Punto
          </button>

          <button onClick={() => setTeamA(teamA - 1)}>
            -1 Punto
          </button>
        </div>

        <div>
          <h2>Equipo B</h2>
          <h1>{teamB}</h1>

          <button onClick={() => setTeamB(teamB + 1)}>
            +1 Punto
          </button>

          <button onClick={() => setTeamB(teamB - 1)}>
            -1 Punto
          </button>
        </div>
      </div>

      <div className="grid">
        {cardsData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}