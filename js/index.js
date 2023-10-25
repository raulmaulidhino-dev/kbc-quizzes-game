// KBC Game, Questions & Answers Database
let KBCQuestions = ["What is the national flower of India?",
    "Which planet is known as the Red Planet?",
    "Who is known as the 'Father of the Nation' in India?",
    "Which gas do plants absorb from the atmosphere during photosynthesis?",
    "What is the capital of France?",
    "What is the largest mammal in the world?",
    "Who wrote the play 'Romeo and Juliet'?",
    "What is the chemical symbol for gold?",
    "What is the tallest mountain in the world?",
    "Which gas do humans breathe out?",
    "Who painted the 'Mona Lisa'?",
    "What is the largest planet in our solar system?",
    "Which country is known as the Land of the Rising Sun?",
    "What is the smallest prime number?",
    "Who was the first woman to fly solo across the Atlantic Ocean?",
    "In which year did Christopher Columbus first reach the Americas?",
    "What is the largest organ in the human body?",
    "Who wrote the novel 'To Kill a Mockingbird'?",
    "What is the chemical symbol for oxygen?",
    "Who is the author of 'Harry Potter and the Sorcerer's Stone'?",
    "What is the currency of Japan?",
    "Which gas is responsible for the Earth's ozone layer?",
    "Who was the first President of the United States?",
    "What is the largest ocean on Earth?",
    "Which famous scientist developed the theory of relativity?",
    "What is the smallest planet in our solar system?",
    "What is the largest species of shark?",
    "Who is known as the 'Queen of Pop'?",
    "What is the national bird of the United States?",
    "Who wrote the famous novel 'Pride and Prejudice'?",
    "What is the chemical symbol for silver?",
    "In which year did the Titanic sink?",
    "What is the capital of Australia?",
    "Who is the author of 'The Great Gatsby'?",
    "Which gas is known as laughing gas?",
    "What is the longest river in the world?",
    "Who was the first woman to win a Nobel Prize?",
    "Which planet is known as the 'Morning Star'?",
    "What is the largest continent on Earth?",
    "Who painted the 'Starry Night'?",
    "What is the chemical symbol for carbon?",
    "What is the largest desert in the world?",
    "Who wrote the play 'Hamlet'?",
    "Which famous scientist developed the laws of motion?",
    "What is the currency of China?",
    "In which year did the Berlin Wall fall?",
    "What is the national flower of Japan?",
    "Who was the first American astronaut to orbit the Earth?",
    "What is the smallest country in the world?",
    "Who is the author of 'The Catcher in the Rye'?"
];

let KBCOptions = [
    ["Lotus", "Rose", "Sunflower", "Tulip"],
    ["Mars", "Venus", "Earth", "Mercury"],
    ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhash Chandra Bose"],
    ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    ["Berlin", "Madrid", "Rome", "Paris"],
    ["African Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
    ["Au", "Ag", "Pt", "Cu"],
    ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
    ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
    ["Jupiter", "Saturn", "Mars", "Venus"],
    ["China", "India", "Japan", "South Korea"],
    ["1", "2", "3", "5"],
    ["Amelia Earhart", "Bessie Coleman", "Sally Ride", "Valentina Tereshkova"],
    ["1492", "1588", "1776", "1865"],
    ["Skin", "Liver", "Brain", "Heart"],
    ["Harper Lee", "F. Scott Fitzgerald", "Mark Twain", "Ernest Hemingway"],
    ["O", "O2", "O3", "N2"],
    ["J.K. Rowling", "J.R.R. Tolkien", "George Orwell", "Stephen King"],
    ["Yen", "Dollar", "Euro", "Won"],
    ["Oxygen", "Carbon Dioxide", "Methane", "Ozone"],
    ["George Washington", "Thomas Jefferson", "John Adams", "Benjamin Franklin"],
    ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Charles Darwin"],
    ["Mercury", "Venus", "Mars", "Pluto"],
    ["Great White Shark", "Whale Shark", "Hammerhead Shark", "Tiger Shark"],
    ["Madonna", "Beyoncé", "Whitney Houston", "Mariah Carey"],
    ["Bald Eagle", "American Robin", "American Sparrow", "American Falcon"],
    ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "George Eliot"],
    ["Ag", "Al", "Si", "Ti"],
    ["1912", "1920", "1931", "1945"],
    ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "Harper Lee"],
    ["Nitrous Oxide", "Methane", "Carbon Dioxide", "Sulfur Hexafluoride"],
    ["Nile", "Amazon", "Mississippi", "Yangtze"],
    ["Marie Curie", "Mother Teresa", "Rosa Parks", "Helen Keller"],
    ["Venus", "Mars", "Jupiter", "Mercury"],
    ["Asia", "Africa", "North America", "Europe"],
    ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    ["C", "O", "H", "N"],
    ["Sahara", "Arabian Desert", "Gobi Desert", "Antarctica"],
    ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
    ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
    ["Yuan", "Dollar", "Yen", "Euro"],
    ["1989", "1991", "1995", "2000"],
    ["Cherry Blossom", "Rose", "Tulip", "Sunflower"],
    ["John Glenn", "Alan Shepard", "Neil Armstrong", "Yuri Gagarin"],
    ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
    ["J.D. Salinger", "John Steinbeck", "Ernest Hemingway", "F. Scott Fitzgerald"]
];

let KBCAnswers = [
    "Lotus",       // National flower of India
    "Mars",        // Red Planet
    "Mahatma Gandhi", // Father of the Nation in India
    "Carbon Dioxide", // Gas plants absorb during photosynthesis
    "Paris",       // Capital of France
    "Blue Whale",  // Largest mammal in the world
    "William Shakespeare", // Author of 'Romeo and Juliet'
    "Au",          // Chemical symbol for gold
    "Mount Everest", // Tallest mountain in the world
    "Carbon Dioxide", // Gas humans breathe out
    "Leonardo da Vinci", // Painter of the 'Mona Lisa'
    "Jupiter",     // Largest planet in our solar system
    "Japan",       // Land of the Rising Sun
    "2",           // Smallest prime number
    "Amelia Earhart", // First woman to fly solo across the Atlantic
    "1492",        // Year Christopher Columbus first reached the Americas
    "Skin",        // Largest organ in the human body
    "Harper Lee",  // Author of 'To Kill a Mockingbird'
    "O2",          // Chemical symbol for oxygen
    "J.K. Rowling", // Author of 'Harry Potter and the Sorcerer's Stone'
    "Yen",         // Currency of Japan
    "Ozone",       // Gas responsible for Earth's ozone layer
    "George Washington", // First President of the United States
    "Pacific Ocean", // Largest ocean on Earth
    "Albert Einstein", // Scientist who developed the theory of relativity
    "Mercury",     // Smallest planet in our solar system
    "Whale Shark", // Largest species of shark
    "Madonna",     // Queen of Pop
    "Bald Eagle",  // National bird of the United States
    "Jane Austen",  // Author of 'Pride and Prejudice'
    "Ag",          // Chemical symbol for silver
    "1912",        // Year the Titanic sank
    "Canberra",    // Capital of Australia
    "F. Scott Fitzgerald", // Author of 'The Great Gatsby'
    "Nitrous Oxide", // Gas known as laughing gas
    "Nile",        // Longest river in the world
    "Marie Curie",  // First woman to win a Nobel Prize
    "Venus",       // Morning Star
    "Asia",        // Largest continent on Earth
    "Vincent van Gogh", // Painter of 'Starry Night'
    "C",           // Chemical symbol for carbon
    "Sahara",      // Largest desert in the world
    "William Shakespeare", // Author of 'Hamlet'
    "Isaac Newton", // Scientist who developed the laws of motion
    "Yuan",        // Currency of China
    "1989",        // Year the Berlin Wall fell
    "Cherry Blossom", // National flower of Japan
    "John Glenn",    // First American astronaut to orbit the Earth
    "Vatican City", // Smallest country in the world
    "J.D. Salinger" // the Author of 'The Catcher in the Rye'
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let indexKBC = [];

for (let i = KBCQuestions.length - 1; i >= 0; i--) {
  indexKBC.push(i);
}

let questionSelected = "";
let optionsSelected = [];
let answerSelected = "";
let indexSelected = 0;

let questionElement = document.getElementById("question");
let optionA = document.getElementById("option_A");
let optionB = document.getElementById("option_B");
let optionC = document.getElementById("option_C");
let optionD = document.getElementById("option_D");

let optionA_Clicked = false;
let optionB_Clicked = false;
let optionC_Clicked = false;
let optionD_Clicked = false;

document.getElementById("option_A").addEventListener("click",
 () => {
    optionA_Clicked = true;
    if (optionA_Clicked && optionA.textContent == answerSelected) {
      window.alert("Correct!");
      showOneQuestion();
    } else {
      window.alert("Wrong!");
      showOneQuestion();
    }
  }
);

document.getElementById("option_B").addEventListener("click",
 () => {
    optionB_Clicked = true;
    if (optionB_Clicked && optionB.textContent == answerSelected) {
      window.alert("Correct!");
      showOneQuestion();
    } else {
      window.alert("Wrong!");
      showOneQuestion();
    }
  }
);

document.getElementById("option_C").addEventListener("click",
 () => {
    optionC_Clicked = true;
    if (optionC_Clicked && optionC.textContent == answerSelected) {
      window.alert("Correct!");
      showOneQuestion();
    } else {
      window.alert("Wrong!");
      showOneQuestion();
    }
  }
);

document.getElementById("option_D").addEventListener("click",
 () => {
    optionD_Clicked = true;
    if (optionD_Clicked && optionD.textContent == answerSelected) {
      window.alert("Correct!");
      showOneQuestion();
    } else {
      window.alert("Wrong!");
      showOneQuestion();
    }
  }
);

let optionsArray = [];

optionsArray.push(optionA);
optionsArray.push(optionB);
optionsArray.push(optionC);
optionsArray.push(optionD);

let counter = 0;

function showOneQuestion() {
  shuffleArray(indexKBC);
  indexSelected = indexKBC[Math.floor(Math.random() * indexKBC.length)];
  indexKBC.splice(indexKBC.indexOf(indexSelected), 1);
  
  questionSelected = KBCQuestions[indexSelected];
  optionsSelected = KBCOptions[indexSelected];
  answerSelected = KBCAnswers[indexSelected];
  
  if (questionElement) {
    questionElement.textContent = questionSelected;
  }
  
  shuffleArray(optionsSelected);
  
  for (let i = 0; i < optionsArray.length; i++) {
    if (optionsArray[i]) {
      optionsArray[i].textContent = optionsSelected[i];
    }
  }
}
showOneQuestion();