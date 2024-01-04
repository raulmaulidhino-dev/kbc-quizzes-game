// KBC Game, Questions & Answers Database
let KBCQuestions = [
    "What is the national flower of India?",
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
    "Who is the author of 'The Catcher in the Rye'?",
    "What is the largest country by land area in Asia?",
    "Which river is often referred to as the 'Mother River of China'?",
    "What is the official language of Indonesia?",
    "What is the capital of South Korea?",
    "In which country is the famous archaeological site of Angkor Wat located?",
    "What is the tallest mountain in Asia and the world? (Above the sea level)",
    "Which European country is known for its unique shape resembling a boot?",
    "Which river flows through both India and Bangladesh and is known as the 'Sorrow of Bengal'?",
    "What is the currency of Saudi Arabia?",
    "Which Asian city is often referred to as the 'Pearl of the Orient'?",
    "What is the official language of Iran?",
    "In which country is the city of Dubai located?",
    "Which Asian island nation is also known as the 'Teardrop of India'?",
    "What is the largest desert in Asia?",
    "Which country is famous for the Terracotta Army?",
    "What is the official name of North Korea?",
    "In which country would you find the ancient city of Petra?",
    "What is the national flower of Japan?",
    "Which Asian country is known for the annual Naadam Festival featuring 'Three Manly Games'?",
    "What is the currency of Thailand?",
    "Which river is often called the 'Lifeline of India'?",
    "What is the official language of Vietnam?",
    "In which country is the Taj Mahal located?",
    "What is the currency of Malaysia?"
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
    ["J.D. Salinger", "John Steinbeck", "Ernest Hemingway", "F. Scott Fitzgerald"],
    ["Russia", "China", "India", "Mongolia"],
    ["Yellow River", "Ganges", "Mekong River", "Yangtze River"],
    ["Indonesian", "Malay", "Tagalog", "Vietnamese"],
    ["Seoul", "Beijing", "Bangkok", "Hanoi"],
    ["Thailand", "Cambodia", "Myanmar", "Vietnam"],
    ["Kangchenjunga", "Everest", "Kilimanjaro", "Lhotse"],
    ["India", "Vietnam", "Italy", "Greece"],
    ["Ganges", "Mekong River", "Brahmaputra", "Indus"],
    ["Riyal", "Dinar", "Rupiah", "Baht"],
    ["Bangkok", "Shanghai", "Hong Kong", "Singapore"],
    ["Farsi", "Urdu", "Persian", "Arabic"],
    ["Saudi Arabia", "Qatar", "United Arab Emirates", "Oman"],
    ["Maldives", "Sri Lanka", "Indonesia", "Philippines"],
    ["Arabian Desert", "Sahara Desert", "Gobi Desert", "Kalahari Desert"],
    ["China", "India", "Thailand", "South Korea"],
    ["Democratic People's Republic of Korea", "Republic of Korea", "Korean People's Republic", "North Korean Republic"],
    ["Jordan", "Lebanon", "Syria", "Iraq"],
    ["Cherry Blossom", "Lotus", "Orchid", "Tulip"],
    ["Mongolia", "Thailand", "Nepal", "Kazakhstan"],
    ["Yen", "Baht", "Rupiah", "Peso"],
    ["Ganges", "Indus", "Mekong River", "Brahmaputra"],
    ["Vietnamese", "Mandarin", "Thai", "Korean"],
    ["India", "Nepal", "Mongolia", "Pakistan"],
    ["Baht", "Ringgit", "Rupiah", "Won"]
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
    "J.D. Salinger", // the Author of 'The Catcher in the Rye'
    "China", 
    "Yellow River", 
    "Indonesian", 
    "Seoul", 
    "Cambodia", 
    "Everest", 
    "Italy", 
    "Ganges", 
    "Riyal", 
    "Hong Kong", 
    "Persian", 
    "United Arab Emirates", 
    "Sri Lanka", 
    "Gobi Desert", 
    "China", 
    "Democratic People's Republic of Korea", 
    "Jordan", 
    "Cherry Blossom", 
    "Mongolia", 
    "Baht", 
    "Ganges", 
    "Vietnamese", 
    "India", 
    "Ringgit"
];

// All necessary items and elements
let indexKBC = [];

let questionSelected = "";
let optionsSelected = [];
let answerSelected = "";
let indexSelected = 0;

// Caption, Question and Options
let startupCaption = document.getElementById("startup_caption");
let questionsAndOpptions = document.getElementById("questions_and_options");
let questionElement = document.getElementById("question");
let optionA = document.getElementById("option_A");
let optionB = document.getElementById("option_B");
let optionC = document.getElementById("option_C");
let optionD = document.getElementById("option_D");

let optionsArray = [];

optionsArray.push(optionA);
optionsArray.push(optionB);
optionsArray.push(optionC);
optionsArray.push(optionD);

const options = document.querySelectorAll(".option");

// Time & Prize Status Elements
let statusSection = document.getElementById("status_section");
// Prize
let prizeStatus = document.getElementById("prize_status");
let prizeList = [0, 1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000, 1250000, 2500000, 5000000, 7500000, "1 Crore", "7.5 Crore"];
let prizeIndex = 0;
let currentPrize = 0;

// Time
let timeStatus = document.getElementById("time_status");
let duration = [45, 60];

// Footer Section
const footerSection = document.getElementById("footer_section");
// Buttons
const nextButton = document.getElementById("next_button");
const resetButton = document.getElementById("reset_button");
const startButton = document.getElementById("start_button");
// Answer Checker
const answerChecker = document.getElementById("answer_checker");

// Icon/Symbol Resources
const rupeeSymbol = "\u20B9";
const infinitySymbol = "\u221E";

// Reset the Prize
const resetPrize = () => {
  prizeIndex = 0;
  currentPrize = prizeList[prizeIndex];
  prizeStatus.textContent = `${rupeeSymbol}${currentPrize.toLocaleString("en-IN")}`;
}

// Shuffling an Array
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Filling an Array
const fillArray = (arr, start, end) => {
  for (let i = start; i < end;  i++) {
    arr.push(i);
  }
}

// Clearing an Array
const clearArray = arr => {
  arr.splice(0, arr.length);
}

// Filling Array for IndexKBC for the first time
fillArray(indexKBC, 0, KBCQuestions.length);

// Start and Stop Time
let intervalId;
let seconds = 0;

let startTime = s => {
  timeStatus.textContent = `00:${String(s).padStart(2, '0')}`;
  intervalId = setInterval(() => {
    timeStatus.textContent = `00:${String(s - 1).padStart(2, '0')}`;
    if (s <= 0) {
      clearInterval(intervalId);
      alert("Time\'s Up!");
      resetPrize();
      timeStatus.textContent = "00:00";
      s = duration[0];
      showOneQuestion();
    }
    s--;
  }, 1000);
}

// Showing one question from the array lists
let showOneQuestion = () => {
  if (indexKBC.length > 0) {
    shuffleArray(indexKBC);
    indexSelected = indexKBC[Math.floor(Math.random() * indexKBC.length)];
    indexKBC.splice(indexKBC.indexOf(indexSelected), 1);
  
    questionSelected = KBCQuestions[indexSelected];
    optionsSelected = KBCOptions[indexSelected];
    answerSelected = KBCAnswers[indexSelected];
  
    questionElement.textContent = questionSelected;
  
    shuffleArray(optionsSelected);
  
    for (let i = 0; i < optionsArray.length; i++) {
      optionsArray[i].textContent = optionsSelected[i];
    }

    if (currentPrize >= 0 && currentPrize <= 10000) {
      seconds = duration[0];
      startTime(seconds); 
    } else if (currentPrize >= 10001 && currentPrize <= 320000) {
      seconds = duration[1];
      startTime(seconds); 
    } else {
      timeStatus.textContent = infinitySymbol;
    }
  } else {
    clearArray(indexKBC);
    fillArray(indexKBC, 0, KBCQuestions.length);
  }
}

const uncheckAnswer = () => {
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove("mark-correct-option");
    options[i].classList.remove("mark-wrong-option");
    options[i].classList.remove("hide");
  }
  answerChecker.classList.remove("show-correct-answer-checker");
  answerChecker.classList.remove("show-wrong-answer-checker");
  footerSection.classList.remove("show-footer-section");
}

// BUTTON/SECTION EVENTS
// If the Quiz/Game is started
startButton.addEventListener("click",
() => {
  startupCaption.classList.add("hide");
  startButton.classList.add("hide");
  statusSection.classList.remove("hide");
  questionsAndOpptions.classList.remove("hide");
  clearArray(indexKBC);
  fillArray(indexKBC, 0, KBCQuestions.length);
  showOneQuestion();
});

// Adding Click Events for Each options
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click",
  () => {
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove("mark-correct-option", "mark-wrong-option");
      answerChecker.classList.remove("show-correct-answer-checker", "show-wrong-answer-checker");
      options[i].classList.add("hide");
    }
    clearInterval(intervalId);
    options[i].classList.remove("hide");
    if (options[i].textContent == answerSelected) {
      options[i].classList.add("mark-correct-option");
      answerChecker.classList.add("show-correct-answer-checker");
      answerChecker.textContent = "Correct!";
      footerSection.classList.add("show-footer-section");
      // Add prize
      prizeIndex++;
      currentPrize = prizeList[prizeIndex];
      prizeStatus.textContent = `${rupeeSymbol}${currentPrize.toLocaleString("en-IN")}`;
      // Check the prize
      if (prizeIndex == (prizeList.length - 1)) {
        window.alert(`YOU WON! AND GOT ${prizeList[prizeIndex].toLocaleString("en-IN")}!`);
        resetPrize();
        // EDIT HERE!!!
      }
    } else {
      options[i].classList.add("mark-wrong-option");
      answerChecker.classList.add("show-wrong-answer-checker");
      answerChecker.textContent = "Wrong!";
      footerSection.classList.add("show-footer-section");
      resetPrize();
    }
  });
}

// When the Next Button is clicked
nextButton.addEventListener("click", 
  () => {
    showOneQuestion();
    uncheckAnswer();
  });

// When the Reset Button is clicked  
resetButton.addEventListener("click", 
  () =>{
    let isRestarted = confirm("Are you sure you want to restart this quiz?");
    if (isRestarted) {
      resetPrize();
      clearArray(indexKBC);
      fillArray(indexKBC, 0, KBCQuestions.length);
      showOneQuestion();
      uncheckAnswer();
    }
  });