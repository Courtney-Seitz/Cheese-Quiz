const STORE = {
  questions: [{
      question: "What’s the difference between making cheese and yogurt?",
      answers: [
        "Milk for yogurt is initially heated to 185 deg for 30 min.",
        "Only one is produced using starter cultures.",
        "For the cheese the milk thickens, for yogurt curds are formed.",
        "With yogurt, effort is made to remove the whey."
      ],
      correctAnswer: "Milk for yogurt is initially heated to 185 deg for 30 min."
    },
    {
      question: "Orange cheeses are NOT artificially colored with _____",
      answers: [
        "Saffron",
        "Egg Yolks",
        "Marigold",
        "Annatto"
      ],
      correctAnswer: "Egg Yolks"
    },
    {
      question: "What animals pass carotenoids to milk (converting it to vitamin A instead), so their cheese is white instead of yellow?",
      answers: [
        "Goats",
        "Water Buffalo",
        "Cows",
        "Sheep"
      ],
      correctAnswer: "Cows"
    },
    {
      question: "Can you make cheese from human breast milk?",
      answers: [
        "No, human breast milk alone can’t be made into cheese because it contains too little protein.",
        "Yes, A French web site, Le Petit Singly, claims that they have made cheese from human breast milk since 1947.",
        "Sure, research has demonstrated that human milk will form a curd.",
        "Absolutely, it's in the dairy aisle at every major chain grocery store."
      ],
      correctAnswer: "No, human breast milk alone can’t be made into cheese because it contains too little protein."
    },
    {
      question: "Where do the holes in Swiss cheese come from?",
      answers: [
        "Magic",
        "People with straws blowing bubbles into the cheese.",
        "Mice",
        "When Propionibacterium freudenreichii metabolizes lactic and propionic acid."
      ],
      correctAnswer: "When Propionibacterium freudenreichii metabolizes lactic and propionic acid."
    },

  ],
  quizStarted: false,
  currentQuestion: 0,
  score: 0
};
