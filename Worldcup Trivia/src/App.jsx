import { useState } from "react";
import "./App.css";

const cards = [
  {
    question: "Which country won the 2022 FIFA World Cup?",
    answer: "Argentina",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkx5nzBLdXEqbvwfilGeYQ-IxD-Bg6F5Uvsd11DYQQJw&s=10",
  },
  {
    question: "Which country has won the most FIFA World Cups?",
    answer: "Brazil",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMwCZh9bGHBrFIpv2TKC9wpm-YSnioDJV2XTzPAQcdQ&s=10",
  },
  {
    question: "Which country hosted the 2010 FIFA World Cup?",
    answer: "South Africa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaIepyQFBOQWAGkIoQEFSwMiXzBM_3nudZeFP25zprJA&s=10",
  },
  {
    question: "Which country won the first FIFA World Cup in 1930?",
    answer: "Uruguay",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzJLFwMRZcDKw6ANvfGXDt3gR6p27uL2DeYoFb23tNw&s=10",
  },
  {
    question: "Which country hosted the 1994 FIFA World Cup?",
    answer: "United States",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0bVSfpRW1TRSCo0WyRqOiLaONdXz9rkujB6mHnQ9gxQ&s=10",
  },
  {
    question: "Which country won the 2018 FIFA World Cup?",
    answer: "France",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOiikHE28bM_OSFCYiLDChtMZfP3CpCsiwwSEbAp6cw&s=10",
  },
  {
    question: "Which country is famous for the nickname 'La Roja'?",
    answer: "Spain",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyGd7SaMYwvN6Hagsse_2B2nrjIPPxfjDCjaqGM2Dmkw&s=10",
  },
  {
    question: "Which country won the 2014 FIFA World Cup?",
    answer: "Germany",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXTUvmzpGbDG2CjpOn7CKw2Lh2384qSSgW1OJ1LQ8dfQ&s=10",
  },
  {
    question: "Who is the all-time leading goalscorer in FIFA World Cup history?",
    answer: "Miroslav Klose (Germany) with 16 goals",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6l65XmDK8gzweKl9JSl_J9lyI3_t0aaeqp4TpK-WY_w&s",
  },
  {
    question: "Which player won the Golden Boot at the 2022 FIFA World Cup?",
    answer: "Kylian Mbappé (France) with 8 goals",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYrmp9iRBpLZkfLjc8Lq5b8pourQvUC7fYfOxDu__QMQ&s=10",
  },
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = cards[currentCardIndex];

  function flipCard() {
    setShowAnswer(!showAnswer);
  }

  function getRandomCard() {
    let randomIndex = Math.floor(Math.random() * cards.length);

    while (randomIndex === currentCardIndex) {
      randomIndex = Math.floor(Math.random() * cards.length);
    }

    setCurrentCardIndex(randomIndex);
    setShowAnswer(false);
  }

  return (
    <div className="app">
      <h1>World Cup Tournament Trivia</h1>

      <p className="description">
        Test your knowledge of FIFA World Cup history, winning countries, hosts,
        and legendary tournament facts.
      </p>

      <h3>Number of cards: {cards.length}</h3>

      <div className="card" onClick={flipCard}>
        <img src={currentCard.image} alt="Country flag" />

        <h2>{showAnswer ? currentCard.answer : currentCard.question}</h2>

        <p className="hint">
          {showAnswer ? "Click to see the question" : "Click to reveal answer"}
        </p>
      </div>

      <button onClick={getRandomCard}>Next Card</button>
    </div>
  );
}

export default App;
