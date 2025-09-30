<template>
  <div class="layout">
    <section class="games">
      <div
        v-for="(game, index) in filteredGames"
        :key="index"
        class="game-card"
      >
        <img :src="game.image" alt="cover" />
        <div class="game-info">
          <h3>{{ game.name }}</h3>
          <p>{{ game.description }}</p>
          <span class="year">{{ game.year }}</span>

          <div class="actions">
            <router-link
              v-if="game.internal"
              :to="{ name: 'Hangman' }"
              class="play-btn"
            >
              Play
            </router-link>
            <a
              v-else
              :href="game.url"
              target="_blank"
              rel="noopener noreferrer"
              class="play-btn"
            >
              Play
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "GameList",
  props: {
    search: String,
    sort: String
  },
  data() {
    return {
      games: [
        {
          name: "Marvel’s Spider-Man 2",
          description: "Accompany Peter Parker and Miles Morales...",
          year: 2023,
          image: "https://via.placeholder.com/80x100.png?text=Spiderman",
          url: "https://www.playstation.com/en-us/games/marvels-spider-man-2/"
        },
        {
          name: "EA Sports FC (FIFA)",
          description: "Soccer simulation game...",
          year: 2023,
          image: "https://via.placeholder.com/80x100.png?text=FIFA",
          url: "https://www.ea.com/fifa"
        },
        {
          name: "LEGO Star Wars: The Skywalker Saga",
          description: "Relive all 9 films of the LEGO series...",
          year: 2022,
          image: "https://via.placeholder.com/80x100.png?text=LEGO",
          url: "https://www.lego.com/games/starwars"
        },
        {
          name: "Animal Crossing: New Horizons",
          description: "Create your own island...",
          year: 2020,
          image: "https://via.placeholder.com/80x100.png?text=ACNH",
          url: "https://www.animal-crossing.com/new-horizons/"
        },
        {
          name: "Hangman",
          description: "Classic hangman game implemented by us",
          year: 2025,
          image: "hangman.png",
          internal: true
        },
        {
          name: "Tetris",
          description: "Juego de puzzle con piezas que caen",
          year: 1984,
          image: "ruta/imagen_tetris.png",
          url: "https://tetris.com/play-tetris",
          internal: false
        },
        {
          name: "Snake",
          description: "Clásico juego de la serpiente",
          year: 1997,
          image: "ruta/imagen_snake.png",
          url: "https://playsnake.org/",
          internal: false
        }

      ],
    };
  },
  computed: {
      filteredGames() {
        let list = this.games.filter((g) =>
          g.name.toLowerCase().includes(this.search.toLowerCase())
        );
        if (this.sort === "newest") {
          return list.sort((a, b) => b.year - a.year);
        } else {
          return list.sort((a, b) => a.year - b.year);
        }
      },
      keywordsFromDescriptions() {
      let allWords = this.filteredGames
        .map((g) => g.description.toLowerCase().split(/\W+/))
        .flat();

      let unique = [...new Set(allWords.filter((w) => w.length > 5))];

      return unique;
    }
  },
  watch: {
    keywordsFromDescriptions(newVal) {
      this.$emit("updateKeywords", newVal); // enviamos al padre
    }
  },
  mounted() {
    this.$emit("updateKeywords", this.keywordsFromDescriptions);
  }
};
</script>
