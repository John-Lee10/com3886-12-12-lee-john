const words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

let wins = 0
let losses = 0
let currentWord

class Word {
  constructor(word) {
    this.word = word
    this.displayWord = word.replaceAll(/[\w]/g, "_")
    this.remainingGuesses = 10
    this.incorrectLetters = []
    this.correctLetters = []
  }

  // implement the guessLetter function:
  guessLetter(letter) {
    const wordArr = Array.from(this.word)
    const displayWordArr = Array.from(this.displayWord)

    if (letter === wordArr[0]) {
      this.correctLetters = this.correctLetters + letter
      this.displayWord = this.displayWord.replace(displayWordArr[0],wordArr[0])
    }
    if (letter === wordArr[1]) {
      this.correctLetters = this.correctLetters + letter
      this.displayWord = this.displayWord.replace(displayWordArr[1],wordArr[1])
    }
    if (letter === wordArr[2]) {
      this.correctLetters = this.correctLetters + letter
      this.displayWord = this.displayWord.replace(displayWordArr[2],wordArr[2])
    }
    if (letter === wordArr[3]) {
      this.correctLetters = this.correctLetters + letter
      this.displayWord = this.displayWord.replace(displayWordArr[3],wordArr[3])
    }
    if (letter === wordArr[4]) {
      this.correctLetters = this.correctLetters + letter
      this.displayWord = this.displayWord.replace(displayWordArr[4],wordArr[4])
    }
    if (letter === wordArr[5]) {
      this.correctLetters = this.correctLetters + letter
      this.displayWord = this.displayWord.replace(displayWordArr[5],wordArr[5])
    }
    if (letter === wordArr[6]) {
      this.correctLetters = this.correctLetters + letter
      this.displayWord = this.displayWord.replace(displayWordArr[6],wordArr[6])
    }
    if (letter === wordArr[7]) {
      this.correctLetters = this.correctLetters + letter
      this.displayWord = this.displayWord.replace(displayWordArr[7],wordArr[7])
    }
    if (letter === wordArr[8]) {
      this.correctLetters = this.correctLetters + letter
      this.displayWord = this.displayWord.replace(displayWordArr[8],wordArr[8])
    }
    if (letter === wordArr[9]) {
      this.correctLetters = this.correctLetters + letter
      this.displayWord = this.displayWord.replace(displayWordArr[9],wordArr[9])
    }
    if (letter === wordArr[10]) {
      this.correctLetters = this.correctLetters + letter
      this.displayWord = this.displayWord.replace(displayWordArr[10],wordArr[10])
    }
    if (wordArr.indexOf(letter) == -1){
      this.remainingGuesses = this.remainingGuesses - 1
      this.incorrectLetters = this.incorrectLetters + letter + ", "
    }
  }

  // implement the updateScreen function:
  updateScreen() {
    const wordToGuess = document.getElementById('word-to-guess')
    const remainingGuessDisplay = document.getElementById('remaining-guesses')
    const incorrectLettersDisplay = document.getElementById('incorrect-letters')

    remainingGuessDisplay.textContent = this.remainingGuesses
    wordToGuess.textContent = this.displayWord
    incorrectLettersDisplay.textContent = this.incorrectLetters
  }

  // implement the isGameOver function:
  isGameOver() {
    if(this.displayWord !== this.word && this.remainingGuesses > 0){
      return false
    }
    if(this.displayWord === this.word && this.remainingGuesses > 0){
      return true
    }
    if(this.displayWord !== this.word && this.remainingGuesses <= 0){
      return true
    }
    if(this.displayWord === this.word && this.remainingGuesses <= 0){
      return true
    }
  }

  // implement the getWinOrLoss function:
  getWinOrLoss() {
    if(this.displayWord !== this.word && this.remainingGuesses > 0){
      return null
    }
    if(this.displayWord === this.word && this.remainingGuesses > 0){
      return "win"
    }
    if(this.displayWord !== this.word && this.remainingGuesses <= 0){
      return "loss"
    }
  }
}

function newGame() {
  const randomWord = words[Math.floor(Math.random() * words.length)]
  currentWord = new Word(randomWord)
  currentWord.updateScreen()
}

document.onkeyup = function(e) {
  const pressedKey = e.key.toLowerCase()
  // early exit for non-letter key presses
  if (!/^[a-z]{1}$/g.test(pressedKey)) return

  // pass in guessed letter to word obj
  currentWord.guessLetter(pressedKey)
  // allow word obj to update screen
  currentWord.updateScreen()

  // check if game is over
  const gameOver = currentWord.isGameOver()

  // if game is over, update wins/losses and start new game
  if (gameOver) {
    const previousWord = document.getElementById('previous-word')
    const winDisplay = document.getElementById('wins')
    const lossDisplay = document.getElementById('losses')
    previousWord.textContent = currentWord.word
    const result = currentWord.getWinOrLoss()
    if (result === 'win') {
      wins++
      winDisplay.textContent = wins
    } else if (result === 'loss') {
      losses++
      lossDisplay.textContent = losses
    }
    newGame()
  }
}

newGame()