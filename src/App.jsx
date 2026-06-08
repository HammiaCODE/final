import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const cardsData = [
  {
    id: 1,
    character: "Hook Master",
    image:
      "https://i.pinimg.com/originals/46/99/f6/4699f6ecd0109cffb82decd8d937ab72.png",
    points: "Puntos: 3",
    question:
      "¿Cuál es la diferencia entre useMemo y useCallback?"
    
  },
  {
    id: 2,
    character: "Spring Guardian",
    image:
      "https://static.vecteezy.com/system/resources/previews/023/555/099/non_2x/elf-knight-with-shield-concept-free-vector.jpg",
    points: "Puntos: 5",
      question:
      "¿Cuál es la diferencia entre @Service y @Component?"
  },
  {
    id: 3,
    character: "Kafka Rider",
    image:
      "data:image/jpeg;base64,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",
    points: "Puntos: 3",
    question:
      "¿Qué ventaja ofrece Kafka frente a una comunicación síncrona?"
  },
  {
    id: 4,
    character: "GraphQL Wizard",
    points: "Puntos: 1",
    image:
      "https://www.manga-jam.com/wp-content/uploads/2021/01/How-Draw-Garu-Pucca-10-696x878-1.jpg",
    question:
      "¿Qué ventaja tiene GraphQL frente a REST?"
  },
  {
    id: 5,
    character: "Bug Hunter",
    image:
      "https://cdn.displate.com/artwork/270x380/2025-08-10/e8ad470d-ad57-4633-93de-36d8eb4f14f6.jpg",
    points: "Puntos: 3",
      question:
      "Encuentra el error en un useEffect con dependencia incorrecta."
  },
  {
    id: 6,
    character: "The Architect",
    image:
      "https://i.pinimg.com/736x/13/dd/a8/13dda837666dbc196de6b3cc2bc550f5.jpg",
    points: "Puntos: 1",
      question:
      "Diseña el flujo React → Spring → Kafka."
  },
  {
    id: 7,
    character: "Full Stack Ninja",
    image:
      "https://i.pinimg.com/originals/f1/44/3d/f1443dc859441724588642a2b5e6e2e7.jpg",
    points: "Puntos: 1",
      question:
      "¿Cuándo usarías GraphQL y cuándo REST?"
  },
  {
    id: 8,
    character: "Listener King",
    image:
      "https://media.tycsports.com/files/2024/04/27/709688/bellota-chicas-superpoderosas.webp",
    points: "Puntos: 5",
      question:
      "¿Qué hace un @KafkaListener?"
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
      <h1>⚔️ React Spring Challenge ⚔️</h1>

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