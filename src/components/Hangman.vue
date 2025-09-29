<template>
  <div class="hangman">
    <h2>Juego del Ahorcado </h2>
    <button @click="resetGame">Nueva partida </button>
    <p>Palabra: 
      <span v-for="(letter, index) in displayedWord" :key="index" class="letter">
        {{ letter }}
      </span>
    </p>

    <p>Intentos restantes: {{ attemptsLeft }}</p>

    <input 
      v-model="guess" 
      @keyup.enter="makeGuess" 
      maxlength="1" 
      placeholder="Introduce una letra"
    />
    <button @click="makeGuess">Probar</button>

    <p>Letras usadas: {{ usedLetters.join(', ') }}</p>

    <div v-if="gameOver" class="game-over">
      <p v-if="wordGuessed"> ¡Ganaste! La palabra era: {{ word }}</p>
      <p v-else> Perdiste. La palabra era: {{ word }}</p>
      <button @click="resetGame">Jugar de nuevo</button>
    </div>
  </div>
</template>

<script>
import palabras from "../palabras.json";

export default {
  name: "Hangman",
  data() {
    return {
      words: palabras.map(p => p.toUpperCase()), // convierte todas a mayúsculas
      word: "",
      displayedWord: [],
      attemptsLeft: 6,
      guess: "",
      usedLetters: [],
      gameOver: false,
      wordGuessed: false
    };
  },
  mounted() {
    this.resetGame();
  },
  methods: {
    resetGame() {
      let newWord;
      do {
        newWord = this.words[Math.floor(Math.random() * this.words.length)];
      } while (newWord === this.word);

      this.word = newWord;
      this.displayedWord = Array(this.word.length).fill("_");
      this.attemptsLeft = 6;
      this.guess = "";
      this.usedLetters = [];
      this.gameOver = false;
      this.wordGuessed = false;
    },
    makeGuess() {
      if (this.gameOver || !this.guess) return;

      const letter = this.guess.toUpperCase();

      if (this.usedLetters.includes(letter)) {
        this.guess = "";
        return;
      }

      this.usedLetters.push(letter);

      if (this.word.includes(letter)) {
        for (let i = 0; i < this.word.length; i++) {
          if (this.word[i] === letter) {
            this.displayedWord[i] = letter;
          }
        }
      } else {
        this.attemptsLeft--;
      }

      this.guess = "";

      if (!this.displayedWord.includes("_")) {
        this.wordGuessed = true;
        this.gameOver = true;
      }

      if (this.attemptsLeft === 0) {
        this.gameOver = true;
      }
    }
  }
};
</script>

<style scoped>
.hangman {
  text-align: center;
  margin-top: 20px;
}
.letter {
  display: inline-block;
  margin: 0 4px;
  font-size: 24px;
  font-weight: bold;
}
input {
  margin-top: 10px;
  padding: 5px;
}
button {
  margin-left: 5px;
  padding: 5px 10px;
}
.game-over {
  margin-top: 15px;
}

</style>
